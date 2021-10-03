import React, { Component } from 'react'
import { Form ,Button,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'
export class Formexam extends Component {
constructor(props){
    super(props)
    this.state={
        image:'',
        title:'',
        iddrink:'',
        id:'',
        data:[],
        showform:false
    }
}

    handlelocation=(e)=>{
        // console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
handlesubmit=async(e)=>{
    e.preventDefault()
    const list={
        strDrink:this.state.title,
        strDrinkThumb:this.state.image,
        idDrink:this.state.iddrink
      }
      console.log(list);
    const updatedata = await axios.patch(`http://localhost:8000/update-fav/${this.state.id}`,list)
    this.setState({
        data:updatedata.data.data.getFav
    })
console.log(updatedata.data.data.getFav);
}

componentDidMount=async()=>{
const getdata = await axios.get('http://localhost:8000/get-fav')
console.log(getdata.data.data.getFav);
this.setState({
    data:getdata.data.data.getFav
})
}
remove=async(id)=>{
    const removedata = await axios.delete(`http://localhost:8000/delete-fav/${id}`)
    console.log(removedata.data.data);
    this.setState({
        data:removedata.data.data
    })
}
update=async(id,title,image,iddrink)=>{
   
   
    this.setState({
        id:id,
        image:image,
        title:title,
        iddrink:iddrink,
        showform:true

    })
}

    render() {
        return (
            <div>
            <div>
                {this.state.showform &&
<Form onSubmit = {this.handlesubmit}>
<Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" name='title' onChange={this.handlelocation} value={this.state.title}/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>image</Form.Label>
      <Form.Control type="text" placeholder="enter image" name='image' onChange={this.handlelocation} value={this.state.image}/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>id Drink</Form.Label>
      <Form.Control type="text" placeholder="enter id" name='iddrink' onChange={this.handlelocation} value={this.state.iddrink}/>
    </Form.Group>
  </Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>}
     </div>
     <div>
     <Row xs={1} md={3} className="g-4">
  {this.state.data.map((item,index) => (
    <Col key = {index}>
      <Card >
        <Card.Img variant="top" src={item.strDrinkThumb} />
        <Card.Body>
          <Card.Title>{item.strDrink}</Card.Title>
          <Card.Text>
          {item.idDrink}
          <br/>
          <Button variant="danger" onClick={()=>{this.remove(item._id)}}>remove</Button>{' '}
          <Button variant="danger" onClick={()=>{this.update(item._id,item.strDrink,item.strDrinkThumb,item.idDrink)}}>update</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
     </div>
     </div>
        )
    }
}

export default Formexam

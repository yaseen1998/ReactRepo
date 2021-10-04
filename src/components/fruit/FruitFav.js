import React, { Component } from 'react'
import { Form ,Button,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class FruitFav extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            image:'',
            price:'',
            fruit:[],
            id:''
        }
    }
    componentDidMount=async()=>{
        const Fruitdata = await axios.get('http://localhost:8000/get-fruit')
        console.log(Fruitdata.data.data);
        this.setState({
            fruit:Fruitdata.data.data
        })
    }
    handlelocation=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlesubmit= async(e)=>{
        e.preventDefault()
        const list = {
            name:this.state.name,
            image:this.state.image,
            price:this.state.price
        }
        const update = await axios.patch(`http://localhost:8000/update-fruit/${this.state.id}`,list)
        this.setState({
            fruit:update.data.data
        })
    }
    removefav = async(id)=>{
        const remove = await axios.delete(`http://localhost:8000/delete-fruit/${id}`)
        this.setState({
            fruit:remove.data.data
        })
    }
    updatefav = async(id,name,image,price)=>{
        this.setState({
            id:id,
            name:name,
            image:image,
            price:price
        })
    }
    render() {
        return (
            <div>
            <div>
            <Link  to="/">home</Link>

            <Form onSubmit = {this.handlesubmit}>
<Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" name='name' onChange={this.handlelocation} value={this.state.name}/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>image</Form.Label>
      <Form.Control type="text" placeholder="enter image" name='image' onChange={this.handlelocation} value={this.state.image}/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>id Drink</Form.Label>
      <Form.Control type="text" placeholder="enter id" name='price' onChange={this.handlelocation} value={this.state.price}/>
    </Form.Group>
  </Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
            <div>
            <Row xs={1} md={3} className="g-4">
  {this.state.fruit.map((item,index) => (
    <Col key = {index}>
      <Card >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          {item.price}
          <br/>
         
          <Button variant="danger" onClick={()=>{this.removefav(item._id)}}>remove</Button>
          <Button variant="danger" onClick={()=>{this.updatefav(item._id,item.name,item.image,item.price)}}>update</Button>
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

export default FruitFav

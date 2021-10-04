import React, { Component } from 'react'
import axios from 'axios'
import { Card ,Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'
import { withAuth0 } from "@auth0/auth0-react";

export class FruitData extends Component {
    constructor(props){
        super(props)
        this.state={
            fruit:[]
        }
    }

    componentDidMount=async()=>{
const Fruitdata = await axios.get('https://fruit-api-301.herokuapp.com/getFruit')
this.setState({
    fruit:Fruitdata.data.fruits
})

    }


    createfav=async(name,image,price)=>{
      console.log(this.props.auth0.user.email);
     const list={
            name:name,
            image:image,
            price:price
        }
        const fav = await axios.post(`http://localhost:8000/create-userfrui/${this.props.auth0.user.email}`,list)
        console.log(fav.data);
    }
    render() {
        return (
            <div>
            
              <Button variant="primary" ><Link  to="/fruitfav">fruitfav</Link></Button>
              <LogoutButton/>

                 <LoginButton/>

                
                
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
         {this.props.auth0.isAuthenticated&&
          <Button variant="danger" onClick={()=>{this.createfav(item.name,item.image,item.price)}}>add fav</Button>}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
            </div>
        )
    }
}

export default withAuth0(FruitData)

import React, { Component } from 'react'
import axios from 'axios'
import { Card ,Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Formexam from './Formexam'
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

export class Exam301 extends Component {
    constructor(props){
        super(props)
        this.state={
            drink:[]
        }
    }
    componentDidMount=async()=>{
const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
console.log(data.data.drinks);
this.setState({
    drink:data.data.drinks
})
    }
    createfav= async(title,img,id)=>{
      console.log(title);
      const list={
        strDrink:title,
        strDrinkThumb:img,
        idDrink:id
      }
      const create = await axios.post('http://localhost:8000/create-fav',list)
      console.log(create);
    }
    render() {
      const { isAuthenticated } = this.props.auth0

        return (
            <div>
              <div>
                {/* <Link  to="/">home</Link> */}
                {isAuthenticated&&

                <Link  to="/Formexam">fav</Link>}
                <LoginButton/>
                <LogoutButton/>
              </div>
                <Row xs={1} md={3} className="g-4">
  {this.state.drink.map((item,index) => (
    <Col key = {index}>
      <Card >
        <Card.Img variant="top" src={item.strDrinkThumb} />
        <Card.Body>
          <Card.Title>{item.strDrink}</Card.Title>
          <Card.Text>
          {item.idDrink}
          <br/>
          {isAuthenticated&&
          <Button variant="danger" onClick={()=>{this.createfav(item.strDrink,item.strDrinkThumb,item.idDrink)}}>add fav</Button>}
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

export default withAuth0 (Exam301)

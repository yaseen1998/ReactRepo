/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import AgeComponent from './Age'

function UserList (props){
    const users = props.users
    return (
        <ul>
            <h1> list function </h1>
            {
                users.map((user,index)=><li key ={index}>  {user.name}</li>)
                } 
        </ul>
    )
}
class Condition extends Component {
    constructor(props){
        
        super(props)
        this.age=15
    }
    render() {
        const agess = 10;
        let agetemp =''
        let users = [
            {id:1,name:'a',age:30},
            {id:2,name:'b',age:20},
            {id:3,name:'c',age:10}
        ]
        let gusets = [
            {id:1,name:'ah',age:30},
            {id:2,name:'bs',age:20},
            {id:3,name:'cl',age:10}
        ]
        if(agess <15){
            agetemp = <h1> you are smaller</h1>
        }
        else{
            agetemp = <p> you are older </p>
        }
        return (
            <div>
                <AgeComponent ages={agess}/>
                <AgeComponent ages={20}/>
                <UserList users={users}/>
                <UserList users={gusets}/>
                {this.age>12?<div>you are older 15</div>
                :<div>you are smaller</div>}
                  {this.agess>12?<div>you are older</div>
                :<div>you are smaller 10</div>}
                {agetemp}
                <hr/>
                <h1> list loop</h1>
                {
                users.map((user,index)=><li key ={index}>  {user.name}</li>)
                }
            </div>
        )
    }
}

export default Condition

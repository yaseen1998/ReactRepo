import React, { Component } from "react";

class List extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
this.fruit =['apple','orange','banana']
  }
  
     lisst=()=>{
         this.fruit =['apple','orange','banana','mongo']
         let fru = ['apple','orange','banana']
         return  fru 
     }
  
  render() {
    
    return <div> 
        
    <ul>
        {this.fruit.map(item=><li key={item}>{item}</li>)}
        </ul>
        <ul>
        {this.lisst().map(item1=><li key ={item1}>{item1}</li>)}
        </ul>
        <ul>
        {this.fruit.map(item2=><li key ={item2}>{item2}</li>)}
        </ul>
        </div>;
  }
}

export default List;

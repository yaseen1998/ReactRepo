import { React } from "react";

function AgeComponent(props){
    let agetemp =''

    if(props.ages <15){
        agetemp = <h1> you are smaller-15</h1>
    }
    else{
        agetemp = <p> you are older-15</p>
    }
    return agetemp;
}
export default AgeComponent
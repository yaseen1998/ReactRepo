import { React, Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
//hello
function Test(){
  return <h1>welcome to hornedbeast</h1>
}
class  App extends Component{
  render(){
    return(
    <>
    <Test/>
      <Header/>
      <Main/>
      <Footer/>
      
    </>
    
    )
  }
}

export default App

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Askmecard from './Askmecard';
import SignIn from './SignIn';
import axios from 'axios';
import swal from 'sweetalert';

class App extends Component {
  
state = { 
  people:[],
  isSubmitted: false,
  
}

changeHandler = (e)=>{
  let data = {...this.state} //clone state

  data[e.target.name] = e.target.value //create own keys from input field and add to state
  //<input name="firstname" value="ebere" />
  this.setState(data) //set state with new created keys
  }

submitHandler = () =>{

let data2 = {...this.state} //clone state

console.log(data2);

    if (data2.skills != null ){
      axios.get(`https://cors-anywhere.herokuapp.com/https://trendyskills.com/service?q=keywords&like=${data2.skills}&key=QpFaHaJ1Xp3JTgNM`)
        .then(res => { 
            data2.people.push({ 
            name : this.state.name, 
            skills : this.state.skills, 
            jobs: res.data.keywords[1].keyName,
            image : `https://api.adorable.io/avatars/285/abott@adorable.${this.state.name}.pngCopy%20to%20Clipboard`
          }) 

          this.setState(data2)  

          this.fixHandler() //change isSubmitted to empty 
        })
    }


}

fixHandler = () =>{

  let data = {...this.state}
  data.isSubmitted = !this.state.isSubmitted
  
  this.setState(data)
  
  }

  changeImage =(name)=>{
  //   let image = {...this.state} //clone state

  axios.get(`https://api.adorable.io/avatars/285/abott@adorable.${name}.pngCopy%20to%20Clipboard`)
    .then(res => {
      console.log(res)
      
      
    })
    .catch(error => {
      swal("You Were wrong");
    })


  }
  

  advice = () => {
 let advice1 = prompt("write a word that you want to get advice on");
 
 if (advice1 != null){
   

    axios.get(`https://api.adviceslip.com/advice/search/${advice1}`)
    .then(res => {
      console.log(res)
      swal("The Advice is", res.data.slips[0].advice);
      
    })
    .catch(error => {
      swal("search for another word please.");
    })
    
  }
 }


  
  render() {
    console.log(this.state)
   

    let showComponent = ''

    if(this.state.isSubmitted){
      showComponent = <Askmecard  changeImage={this.changeImage}  skilljobs={this.state.jobForSkill} adviceFunc={this.advice}people={this.state.people}  changeVisiblity={this.fixHandler}  />
    }else{
      showComponent = <SignIn changeImage={this.changeImage}  skilljob={this.state.jobForSkill} changes1={this.changeHandler}  changes={this.changeHandler} changeVisiblity={this.submitHandler} />
    }
    return (
      <div className="App">
    



       {showComponent}

      
     {/* <SignIn/> */}
      </div>
    );
  }

  
}

export default App;

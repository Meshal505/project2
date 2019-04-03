import React, { Component } from 'react'

export default class SignIn extends Component {


  render() {

    return (
        <div className='row'>
        <div className='col-3'></div>
        
      <div className="containerl col-6 ">
      <h1>Welcome to Job & Advices Website</h1>

      <div className="fullName">
      Write Your Full Name in Here<br/>
      <input name="name" placeholder="   Ex; Meshal Alqahtani" onChange={this.props.changes}/> <br/> <br/>
      </div>

                  What are your skills<br/>
      <input name="skills" placeholder="    Ex; JS, PHP or Ruby" onChange={this.props.changes1} /> <br/><br/>



      <button className="btn1" type="button" class="btn btn-info" onClick={this.props.changeVisiblity}>Submit</button>
      
     

      </div>

      <div className='col-3'></div>
      </div>
      
    )
  }
}

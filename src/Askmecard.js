import React, { Component } from 'react'
import SignIn from './SignIn';
import swal from 'sweetalert'


export default class Askmecard extends Component {
 
render() {
console.log(this.props);


    return (
       
        <div className="row">
        
        {this.props.people.map( person => 
            <div className="col-sm-4">
                                 
                                <div className="card">
                                <div className="maincard">
                                <div className="card-body">
                                    <h3>My Name</h3>
                                    <h1 className="badge badge-pill badge-success">{person.name}</h1>
                                    <p></p>
                        
                                <img className="img" src={person.image} width="100px" alt="its an img"/><br/><br/>
                                
                                
                                
                                <div className="skills">
                                        <p>My Skills</p>
                                        <ul>
                                        <li className="badge badge-pill badge-primary">{person.skills}</li>
                                        </ul>
                                
                                </div>
                        
                                
                            <div className="jobs">
                                        <p>Available Jobs </p>
                                        
                                        
                                        <li>{person.jobs}</li>
                                        
                                        
                            </div> <br/> <br/> 
                                
                        
                                <br/><button className="btn btn-primary btn-block" onClick={this.props.adviceFunc}> Get an Advice</button>
                                <button className="btn btn-primary btn-block" onClick={this.props.changeVisiblity}> Back Button</button>
                        
                                </div>
                                </div>
                                </div>
                                
                        </div>
    )}
    
    </div>
    
    )
}
}

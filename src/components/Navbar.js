import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
      
    return (
     <>
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
        <b>Code Snippet </b>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar">
        <form className="d-flex">
        
        
          <Link classname="navlink" to="./component/recordingpage.js">
          <button className="btn btn-success" align="right" type="submit">RECORD</button>
          </Link>
        
   
       
        </form>
        </div>
        </div>
       
        </nav>
     
     </>
    )
  }
}

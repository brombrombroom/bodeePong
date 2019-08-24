import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'
import "./navbar.css";

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            
<div className="navbar-login col-4">
           
                <header className="navbar App-header mb-0 d-flex justify-content-center" id="nav-container" >
                  
                        {loggedIn ? (
                            <section className="navbar-section d-flex justify-content-center">
                                <Link to="#" className="btn " onClick={this.logout}>
                                    <span className="text-secondary">Logout</span></Link>

                            </section>
                        ) : (
                            <div className="container d-flex justify-content-center">
                            <div className="row d-flex justify-content-center">
                            <div className="col-4"></div>
                            

                                <section className="navbar-section d-flex justify-content-center" >
                                <div className="d-flex justify-content-center">
                                
                                    <Link to="/" className="btn btn-link col-4 close-btn">
                                        <span className="text-secondary">Home</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link col-4">
                                        <span className="text-secondary">Login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link col-4">
                                        <span className="text-secondary">Sign Up</span>
                                    </Link>
                                    </div>
                                    
                                </section>
                                <div className="col-4"></div>
                                </div>
                                </div>

                                

                            )}
                  
                    {/* <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">BodeePong</h1>
                    </div> */}
                </header>
</div>
         

        );

    }
}

export default Navbar

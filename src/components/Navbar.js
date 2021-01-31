import React, { Component } from 'react'
import './navbar.css'
import logo from './images/logo.svg'

class Navbar extends Component {
    constructor(props) {
        super(props)
    this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        let navbarList = document.getElementById('my-navbar-list')
        if(navbarList.className === 'my-navbar-list'){
            navbarList.className += ' responsive'
        }
        else{
            navbarList.className = 'my-navbar-list'
        }
        console.log(navbarList.className)
    }

    render() {
        return (
            <div className="my-navbar">
                <button className="my-brand my-button"><img src={logo}/></button>
                <button className="my-navbar-hamburger my-button" onClick={this.clickHandler}>Menu</button>
                <div className="my-navbar-list" id="my-navbar-list">
                    <button className="my-navbar-list-item my-button">Blog</button>
                    <button className="my-navbar-list-item my-button">Gallery</button>
                    <button className="my-navbar-list-item my-button">Plans</button>
                    <button className="my-navbar-list-item my-button">Learn</button>
                    <button className="my-navbar-list-item my-button">Log in</button>
                    <button className="my-navbar-list-item my-button sign-up">Sign up</button>
                </div>            
            </div>
        )
    }
}

export default Navbar

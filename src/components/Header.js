import React, { Component } from 'react'
import './header.css'
import racoon from './images/home__intro--raccoon.svg'
import fox from './images/home__intro--fox.svg'
import owl from './images/home__intro--owl.svg'
import AnimalCard from './AnimalCard'

class Header extends Component {
    render() {
        return (
            <>
            <div className="header">
                <div className="header-text-container flex">
                    <div className="header-text-large">
                        Built for developers,
                        Loved by everyone
                    </div>
                    <div className="header-text-medium">
                        Siteleaf is a content management system
                        designed for a better web.
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="animals-container flex">
                    <AnimalCard image={racoon} title='Develop with existing tools' desc='Code offline with Jekyll, sync with GitHub' animal={true}/>
                    <AnimalCard image={fox} title='Edit in the cloud' desc='Easy for non-technical clients, writers, and producers' animal={true}/>
                    <AnimalCard image={owl} title='Free your content' desc='Access by API or generate static sites to S3, GitHub, FTP' animal={true}/>
                </div>
                <div className='header-bottom-button'>
                    <button>Get Started</button>
                </div>
            </div>
            </>
        )
    }
}

export default Header

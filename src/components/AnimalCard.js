import React, { Component } from 'react'

class AnimalCard extends Component {
    render() {
        const animal = this.props.animal? 
            (<div className="animal-card-pic flex">
            <img src={this.props.image}/>
            </div>)
            : 
            ''


        const white = this.props.color? {color: 'white'}: {}
        return (
            <div className={`animal-card ${(this.props.animal? '':'content-text')}`}>
                {animal}
                <div className="animal-card-description">
                <span className="animal-card-title" style={white}>{this.props.title}</span>
                <span style={white}>
                    {this.props.desc}
                </span>
                </div>
            </div>
        )
    }
}

export default AnimalCard

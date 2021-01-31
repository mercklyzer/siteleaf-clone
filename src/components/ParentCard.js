import React, { Component } from 'react'

class ParentCard extends Component {
    render() {
        const animal = this.props.animal? 
            (<div className="animal-card-pic flex">
            <img src={this.props.image}/>
            </div>)
            : 
            ''
        return (
            <div className="animal-card">
                {animal}
                <div className="animal-card-description">
                <span className="animal-card-title">{this.props.title}</span>
                {this.props.desc}
                </div>
            </div>
        )
    }
}

export default ParentCard

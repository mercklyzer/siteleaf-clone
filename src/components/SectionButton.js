import React, { Component } from 'react'
import './sectionButton.css'

class SectionButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isActive: this.props.isActive,
             id: this.props.id
        }
        this.clickHandler = this.props.clickHandler
    }


    render() {
        let active = this.state.isActive? 'active': ''
        return (
            <div className={`section-text-button ${active}`} onClick={(e) => {
                return this.clickHandler(e,this.state.id)
                }}>
            <span className={`section-text-button-title ${active}`}>
                {this.props.title}
            </span>
                {this.props.desc}
            </div>
        )
    }
}

export default SectionButton

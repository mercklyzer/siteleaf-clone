import React, { Component } from 'react'
import './section.css'
import collaborate from './images/home__manage--collaborate.jpg'
import preview from './images/home__manage--preview.jpg'
import edit from './images/home__manage--edit.jpg'
import customize from './images/home__manage--customize.jpg'
import SectionButton from './SectionButton'


class Section extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayImage: collaborate,
             images: [collaborate, preview, edit, customize],
             boxes: [
                {
                    title: 'Collaborate',
                    desc: 'Invite your client or team to create and edit content. Set them as Admin, Publisher, or Writer.',
                    isActive: true
                },
                {
                    title: 'Preview before you publish',
                    desc: 'Preview changes before they go live. Then publish with one click whenever you’re ready.',
                    isActive: false
                },
                {
                    title: 'Smart text editor',
                    desc: 'Choose between a visual editor or just plain Markdown. Drag and drop images or even entire text files.',
                    isActive: false
                },
                {
                    title: 'Powerful content',
                    desc: 'Customize your site with document collections, advanced metadata, and custom permalinks.',
                    isActive: false
                }
            ],
            prevBox : 0,
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(e,key){
        let boxes_temp = [...this.state.boxes]              //copy values of the boxes
        boxes_temp[this.state.prevBox].isActive = false     //update previous box to inactive
        boxes_temp[key].isActive = true                     //update the current box to active
        
        this.setState({
            displayImage: this.state.images[key],
            boxes: boxes_temp,                              //update the boxes in the state
            prevBox: key
        }, () => console.log(this.state.boxes))
    }

    render() {
        return (
            
            <div className='section'>
                <div className='section-title'>Content management for the whole team</div>

                <div className='section-container'>
                    <div className='section-text-container'>
                        {this.state.boxes.map((box, index) => {
                            return (
                                <SectionButton 
                                title={box.title}
                                desc={box.desc}
                                isActive={box.isActive}
                                key={`${index}${box.isActive}`}
                                id={index}
                                clickHandler={this.clickHandler}
                                />
                            )
                        })}  
                    </div>

                    <div className='section-image' key={this.state.displayImage}>
                        <img src={this.state.displayImage} className='fadeIn'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section

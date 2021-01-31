import React, { Component } from 'react'
import styles from './simpleSection.module.css'
import {SimpleSectionConsumer} from './SimpleSectionContext'
import openSource from './images/logos--open-source.svg'



class SimpleSectionText extends Component {
    render() {
        return (
        
        <SimpleSectionConsumer>
            {data => {
                console.log(data)

                let logo = data.logo? <img src={`${openSource}`} className={`${styles.sectionTextLogo}`}/>:''
            
                return (
                <div className={styles.sectionTextContainer}>
                    <div className={styles.sectionTextTitle} style={data.titleColor}>{data.title}</div>
                    <div className={styles.sectionTextDesc}>{data.desc1} <br/><br/> {data.desc2}</div>
                    {logo}
                </div>
                )
                }
            }
        </SimpleSectionConsumer>
        )
        
        
    }
}

export default SimpleSectionText

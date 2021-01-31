import React, { Component } from 'react'
import styles from './simpleSection.module.css'
import SimpleSectionText from './SimpleSectionText'

class SimpleSubSection extends Component {
    render() {
        let data = this.props
        console.log(data)
        let display = data.reverse? (
            <>
            <SimpleSectionText />
            <div className={styles.sectionImageContainer}>
                <img src={data.imageSource} className={styles.sectionImage}/>
            </div>
            </>
            )
            :
            (
            <>
            <div className={styles.sectionImageContainer}>
                <img src={data.imageSource} className={styles.sectionImage}/>
            </div>
            <SimpleSectionText />
            </>
            )

        return (
            <div className={styles.sectionContainer}> 
                {display}
            </div>
        )
    }
}

export default SimpleSubSection

import React, { Component } from 'react'
import styles from './simpleSection.module.css'
import Program from './images/home__develop--jekyll.jpg'
import Github  from './images/home__develop--github.jpg'
import SimpleSubSection from './SimpleSubSection'
import {SimpleSectionProvider} from './SimpleSectionContext'


class SimpleSection extends Component {
    render() {
        return (
        <div className={`${styles.section} section`}>
            <div className='section-title'>Develop with tools you already love  </div>
            <SimpleSectionProvider value={
            {
            title: 'Built on open source',
            titleColor: {
                color: '#e56134'
            },
            desc1: 'Siteleaf is compatible with Jekyll, the static site generator for over half a million websites running on GitHub Pages. ',
            desc2: 'Benefit from a large open source community. Use any existing Jekyll theme, or write your own using Liquid, Sass, and CoffeeScript. Develop locally and even offline.',
            logo: true,
            }}>
                <SimpleSubSection reverse={false} imageSource={Program}/>
            </SimpleSectionProvider>
            <SimpleSectionProvider value={
            {
            title: 'GitHub integration',
            titleColor: {
                color: '#9961c9'
            },
            desc1: 'No more accidental overwrites or deletes. Any change made in Siteleaf can be synced to GitHub, where you can see a log of edits and roll back to any state, giving you a time machine for your content.',
            desc2: 'As you develop your theme, Siteleaf can also automatically update to reflect your GitHub commits. Fits right into your existing workflow.',
            logo: false,
            }}>
                <SimpleSubSection reverse={true} imageSource={Github}/>
            </SimpleSectionProvider>
        </div>  
        )
    }
}

export default SimpleSection

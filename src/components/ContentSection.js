import React, { Component } from 'react'
import AnimalCard from './AnimalCard'
import free from './images/home__free.svg'

class ContentSection extends Component {
    render() {
        const imageStyle = {
            width: '100%',
            height: 'auto'
        }
        const divImageStyle ={
            width: '100%',
            maxWidth: '1000px'
        }

        const divCardStyle ={
            maxWidth: '1200px',
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start'
        }

        return (
            <div className={`section`} style={{backgroundColor: '#374252'}}>
                <div className='section-title' style={{color: 'white'}}>Free your content</div>
                <div style={divImageStyle}>
                    <img src={free} style={imageStyle}/>
                </div>

                <div className='flex' style={divCardStyle}>
                    <AnimalCard title='Publish anywhere' desc='Generate static sites to Amazon S3, GitHub Pages, Rackspace, or FTP using your own domain name.' animal={false} color='white'/>
                    <AnimalCard title='Import and export' desc='Easily move your content into or out of Siteleaf. Import from WordPress, Drupal, Tumblr, Ghost, and more.' animal={false} color='white'/>
                    <AnimalCard title='API for your content' desc='Access your data and integrate into other websites and apps. Automate tasks with Zapier.' animal={false} color='white'/>
                </div>
                
            </div>  
            )
    }
}

export default ContentSection

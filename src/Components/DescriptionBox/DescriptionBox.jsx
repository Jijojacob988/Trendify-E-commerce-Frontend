import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description

            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (123)

            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, deleniti minus dolorum voluptatem asperiores repellendus ipsum? Doloremque minus beatae officia eveniet nobis laudantium possimus dolorum necessitatibus assumenda, at molestias debitis.</p>
            <p>
                Lorem ipsum dolor sit amet consectetutes veritatis hic, nam sed voluptatem ullam molestharum reiciendis. Quo?
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox
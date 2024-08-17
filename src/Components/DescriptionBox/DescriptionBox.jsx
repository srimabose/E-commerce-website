import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilates buying
                nd elling of products or services over the internet.
            </p>
            <p>
                E-commerce website typically display products or services and detailed description
                of the product or service, including price, shipping information, and payment options.
            </p>
        </div>
    </div>
  )
}

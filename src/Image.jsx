import React from 'react'

const Image = ({data}) => {
    return (
        <div className = "img-container">
            <img src = {data.src.medium} alt = "image1" />
            <div className = "photographer">{data.photographer}</div>            
        </div>
    )
}

export default Image

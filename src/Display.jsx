import React from 'react'
import Image from './Image'

const Display = ({images}) => {
    return (
        <div className = "display">
            {
                images.map((item,index) => <Image key = {index} data = {item} />
                )
            }
        </div>
    )
}

export default Display

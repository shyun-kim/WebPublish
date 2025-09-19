import React from 'react'
import { FaPlus } from 'react-icons/fa6'

export function ImageList({imgList}) {
  return (
    <ul className={imgList}>
        {imgList && imgList.map((img, idx)=>
            <li key={idx}>
                <img src={img} />
            </li>
        )}
    </ul>
  )
}

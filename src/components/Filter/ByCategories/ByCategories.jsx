import React from 'react'

export default function ByCategories ({name}) {
    const url = './img/'+ name +'.jpg'
  return (
    <div className='mer'>
        <img className="imgFilter" src={url} alt={name} />
        <a href="./">{name}</a>
    </div>
  )
}

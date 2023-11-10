'use-client'
import React from 'react'

const Header2 = () => {
    const List = [
        {
            name:'Banglore',
        },
        {
            name:'Patna',
        },
        { 
            name:'Pune',
        },
        {
            name:'Mumbai',
        },
        {
            name:'Kolkata',
        }
    ]
  return (

    <div>
      <div className='flex justify-between px-5 bg-gray-100'>
       {
        List.map((e) => (
            <span key={e.name}>{e.name}</span>
        ))
       }
      </div>
    </div>
  )
}

export default Header2

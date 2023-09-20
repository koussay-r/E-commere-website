import React from 'react'
import Products from './Products'

export default function About(props) {
    
  return (
    <div className='mt-20'>
        <div>
            <p className='text-center'>
            About MODULAR
            </p>
            <p>
            We are a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Founded in 1970 in a small space across the street from the University of Pennsylvania.

‍Modular now operates over 200 stores in the United States, Canada and Europe, offering experiential retail environments and a well-curated mix men's product assortments.
            </p>
        </div>
        <div className='mt-10 grid sm:grid-cols-2 md:grid-cols-4 '>
            {
                props.item.map(item=>{
                    return(
                            item.name!=="homeImage"&&
                            <Products key={item._id} item={item} />  
                    )
                })
            }
        </div>
    </div>
  )
}

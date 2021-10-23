/* eslint-disable @next/next/no-img-element */
import React from 'react'



const Latest = ({ rounded = null }) => {
  return (
    <>
      {rounded ? (
        <>
          
          <img src="https://one.cdnmega.com/images/home/bloqueo/peru-magico-especial-fin-de-anao-291x384_6155d4ccec2ec.webp" alt="" className='latest__tour--img-rounded'/>
          <div className='latest__tour-details--title-rounded'>Bacalar</div>
        </>
      ) : (
        <>
         <img src="https://one.cdnmega.com/images/home/bloqueo/peru-magico-especial-fin-de-anao-291x384_6155d4ccec2ec.webp" alt="" className='latest__tour--img'/>
         

          <div className='latest__tour-details'>
            <div className='latest__tour-details--title'>Bacalar</div>

            <div className='latest__tour-details--price-and-rating'>
              <div className='latest__tour-details--rating'>Chetumal</div>
              <div className='latest__tour-details--price'>$1740.00</div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Latest

import React from 'react'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const myLoader = ({ src, width, quality }) => {
  return `https://one.cdnmega.com/images/home/bloqueo/${src}`
}
const Latest = ({ rounded = null }) => {
  return (
    <>
      {rounded ? (
        <>
          <Image
            loader={myLoader}
            src='peru-magico-especial-fin-de-anao-291x384_6155d4ccec2ec.webp'
            alt='Picture of the author'
            width={500}
            height={500}
            className='latest__tour--img-rounded'
          />
          <div className='latest__tour-details--title-rounded'>Bacalar</div>
        </>
      ) : (
        <>
          <Image
            loader={myLoader}
            src='bacalar-y-chetumal-291x384_609d9a7d4ca12.webp'
            alt='Picture of the author'
            width={500}
            height={500}
            className='latest__tour--img'
          />

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

/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { motion } from 'framer-motion'

const Latest = ({ rounded = null, imgSrc }) => {
  return (
    <>
      {rounded ? (
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src={imgSrc}
            alt=''
            className='latest__tour--img-rounded'
          />
          <div className='latest__tour-details--title-rounded'>Bacalar</div>
        </motion.div>
      ) : (
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src={imgSrc}
            alt=''
            className='latest__tour--img'
          />

          <div className='latest__tour-details'>
            <div className='latest__tour-details--title'>Bacalar</div>

            <div className='latest__tour-details--price-and-rating'>
              <div className='latest__tour-details--rating'>Chetumal</div>
              <div className='latest__tour-details--price'>$1740.00</div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Latest

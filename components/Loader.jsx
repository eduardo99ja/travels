import React from 'react'
import { motion } from 'framer-motion'

import Image from './Image'

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
}

const Loader = ({ setLoading }) => {
  return (
    <motion.div className='loader'>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial='hidden'
        animate='show'
        exit='exit'
        className='loader-inner'
      >
        <ImageBlock
          variants={item}
          id='image-1'
          src={
            'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80'
          }
        />
        <motion.div variants={itemMain} className='transition-image'>
          <motion.img
            layoutId='main-image-1'
            src={
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
            }
          />
        </motion.div>
        <ImageBlock
          variants={item}
          id='image-3'
          src={
            'https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
          }
        />
        <ImageBlock
          variants={item}
          id='image-4'
          src={
            'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
          }
        />
        <ImageBlock
          variants={item}
          id='image-5'
          src={
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1121&q=80'
          }
        />
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({ posX, posY, variants, id, src }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image src={src} fallback={src} alt={id} />
    </motion.div>
  )
}
export default Loader

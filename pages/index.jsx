import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import MainFeaturedPost from '../components/Banner'
import { listTravels } from '../redux/actions/travelActions'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Travel from '../components/travel/Travel'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Loader from '../components/Loader'
import Header from '../components/header/Header'
import Banner from '../components/Banner'
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export default function Home() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const travelList = useSelector(state => state.travelList)
  // const { loading, error, travels } = travelList
  // useEffect(() => {
  //   dispatch(listTravels())
  // }, [dispatch])
  // console.log(travels)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading')
  }, [loading])

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Layout>
              <Banner />
              {!loading && (
                <div className='transition-image final'>
                  <motion.img
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    src={
                      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                    }
                    layoutId='main-image-1'
                  />
                </div>
              )}
              
            </Layout>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

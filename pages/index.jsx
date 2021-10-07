import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import MainFeaturedPost from '../components/MainFeaturedPost'
import { listTravels } from '../redux/actions/travelActions'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Travel from '../components/travel/Travel'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Loader from '../components/Loader'
import Header from '../components/header/Header'
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
              <MainFeaturedPost post={mainFeaturedPost} />
              {!loading && (
                <div className='transition-image final'>
                  <motion.img
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    src={
                      'https://images.unsplash.com/photo-1528048786098-cc8217b47088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                    }
                    layoutId='main-image-1'
                  />
                </div>
              )}

              {/* <Container className='listado-viajes' disableGutters>
                <section>
                  <Typography
                    component='h1'
                    variant='h2'
                    align='center'
                    color='textPrimary'
                  >
                    Encuentra las mejores ofertas en Viajes Travleer
                  </Typography>
                  <Typography
                    variant='h5'
                    align='center'
                    color='textSecondary'
                    paragraph
                    className='mt'
                  >
                    Tus vacaciones al mejor precio,
                    <strong>
                      promociones en vuelos, hoteles, paquetes, cruceros
                    </strong>{' '}
                    a los principales destinos turísticos de México y el mundo.
                    Paga tu viaje hasta en 18 meses sin intereses ¡Ofertas que
                    te hacen viajar!
                  </Typography>
                </section>
                <main></main>
              </Container> */}
            </Layout>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
const mainFeaturedPost = {
  title: 'Toma el viaje de tus sueños con nosotros',
  description:
    'Contamos con muchos destinos, nacionales e internacionales, en los mejores hotesles, restaurantes, etc. Con los mejores precios del mercado',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Ver últimos',
}

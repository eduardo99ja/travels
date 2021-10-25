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
import { Box, Paper } from '@material-ui/core'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Loader from '../components/Loader'
import Banner from '../components/Banner'
import Latest from '../components/travel/Latest'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss'
import Carousel from 'react-material-ui-carousel'
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
} from '@material-ui/core'
var items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
  {
    name: 'Random Name #3',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #4',
    description: 'Hello World!',
  },
  {
    name: 'Random Name #5',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #6',
    description: 'Hello World!',
  },
]
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
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )

    return () => {
      node.parentNode.removeChild(node)
    }
  }, [])

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
              <section id='gallery' className='gallery'>
                <Container maxWidth='xl'>
                  <Container maxWidth='lg' className='gallery-top'>
                    <Typography
                      variant='h2'
                      gutterBottom
                      component='div'
                      className='title-section'
                    >
                      <b>Increibles </b>Tours y Aventuras <br />
                      llenas de <b>diversión</b> te esperan.
                    </Typography>
                    <Typography
                      variant='h5'
                      gutterBottom
                      component='div'
                      className='text-description'
                    >
                      Somos la red de agentes de viajes profesionales más grande
                      y célebre de México.
                      <br />
                      Nuestros agentes experimentados lo ayudan a crear
                      experiencias de viaje únicas
                      <br /> que le encantarán
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} mt={5}>
                      <Grid container spacing={1}>
                        <Grid
                          container
                          item
                          spacing={3}
                          className='container-row-mb'
                        >
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              rounded={true}
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-1-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-40-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42-650x650.jpg'
                              }
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          spacing={3}
                          className='container-row-mb'
                        >
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-43-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-43-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-43-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              rounded={true}
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-2-650x650.jpg'
                              }
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          spacing={3}
                          className='container-row-mb'
                        >
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              rounded={true}
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-3-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-46-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-47-650x650.jpg'
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            className='latest__contenedor'
                          >
                            <Latest
                              imgSrc={
                                'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48-650x650.jpg'
                              }
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </Container>
              </section>
              <section className='features-section'>
                <Container maxWidth='lg'>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                      <div className='feature-left'>
                        <span className='icon'>
                          <Icon className='fas fa-globe-americas feature-icon' />
                        </span>
                        <div className='feature-copy'>
                          <h3>Viaje familiar</h3>
                          <p>
                            Facilis ipsum reprehenderit nemo molestias. Aut cum
                            mollitia reprehenderit.
                          </p>
                          <p>
                            <a href='#'>Learn More</a>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <div className='feature-left'>
                        <span className='icon'>
                          <Icon className='fas fa-plane feature-icon' />
                        </span>
                        <div className='feature-copy'>
                          <h3>Tours</h3>
                          <p>
                            Facilis ipsum reprehenderit nemo molestias. Aut cum
                            mollitia reprehenderit.
                          </p>
                          <p>
                            <a href='#'>Learn More</a>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <div className='feature-left'>
                        <span className='icon'>
                          <Icon className='fas fa-wallet feature-icon' />
                        </span>
                        <div className='feature-copy'>
                          <h3>Luna de miel</h3>
                          <p>
                            Facilis ipsum reprehenderit nemo molestias. Aut cum
                            mollitia reprehenderit.
                          </p>
                          <p>
                            <a href='#'>Learn More</a>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <div className='feature-left'>
                        <span className='icon'>
                          <Icon className='fas fa-wine-glass-alt feature-icon' />
                        </span>
                        <div className='feature-copy'>
                          <h3>Vieje de negocios</h3>
                          <p>
                            Facilis ipsum reprehenderit nemo molestias. Aut cum
                            mollitia reprehenderit.
                          </p>
                          <p>
                            <a href='#'>Learn More</a>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <div className='feature-left'>
                        <span className='icon'>
                          <Icon className='fas fa-street-view feature-icon' />
                        </span>
                        <div className='feature-copy'>
                          <h3>Viaje solitario</h3>
                          <p>
                            Facilis ipsum reprehenderit nemo molestias. Aut cum
                            mollitia reprehenderit.
                          </p>
                          <p>
                            <a href='#'>Learn More</a>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <div className='feature-left'>
                        <span className='icon'>
                          <Icon className='fas fa-road feature-icon' />
                        </span>
                        <div className='feature-copy'>
                          <h3>Explorador</h3>
                          <p>
                            Facilis ipsum reprehenderit nemo molestias. Aut cum
                            mollitia reprehenderit.
                          </p>
                          <p>
                            <a href='#'>Learn More</a>
                          </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </section>
              <section>
                <Container maxWidth='xl'>
                  <Container maxWidth='lg' className='gallery-top'>
                    <Typography
                      variant='h2'
                      gutterBottom
                      component='div'
                      className='title-section'
                    >
                      <b>Tendencias </b>, los mejores Tours <br />y los destinos
                      más <b>divertidos.</b>
                    </Typography>
                    <Typography
                      variant='h5'
                      gutterBottom
                      component='div'
                      className='text-description'
                    >
                      ¿Cúal será tu próximo destino?
                      <br />
                      Descubre lo que otros viajeros están buscando aquí.
                    </Typography>
                  </Container>
                  <Box sx={{ flexGrow: 1 }} mt={5}>
                    <Carousel>
                      {items.map((item, i) => (
                        <Item item={item} key={i} />
                      ))}
                    </Carousel>
                  </Box>
                </Container>
              </section>
            </Layout>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

function Item(props) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={3}>
        <Travel travel={travel} />
      </Grid>
      <Grid item sm={3}>
        <Travel travel={travel} />
      </Grid>
      <Grid item sm={3}>
        <Travel travel={travel} />
      </Grid>
      <Grid item sm={3}>
        <Travel travel={travel} />
      </Grid>
    </Grid>
  )
}

const travel = {
  image: ['https://www.travelleaders.com/images/masonryHome/costa_rica.jpg'],
  name: 'Random Name #3',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae',
  price: 1900,
  days: 5,
  city: 'Guanajuato',
  category: 'Tour',
}

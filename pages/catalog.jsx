import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Material components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Skeleton } from '@material-ui/lab'
import { Box, Typography } from '@material-ui/core'

import { loadCSS } from 'fg-loadcss'

import Layout from '../components/Layout/Layout'
import { listTravels } from '../redux/actions/travelActions'
import Travel from '../components/travel/Travel'



const Catalog = () => {
  const dispatch = useDispatch()
  const travelList = useSelector(state => state.travelList)
  const { loading, error, travels } = travelList

  // Load css fontawesome
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
    dispatch(listTravels())
  }, [dispatch])

  return (
    <Layout>
      <Container maxWidth='lg' className='catalog__container'>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <section>
            <Container maxWidth='xl'>
              <Container maxWidth='lg' className='gallery-top'>
                <Typography
                  variant='h2'
                  gutterBottom
                  component='div'
                  className='title-section'
                >
                  <b>Tendencias </b>, los mejores Tours <br />y los destinos más{' '}
                  <b>divertidos.</b>
                </Typography>
                <Typography
                  variant='h5'
                  gutterBottom
                  component='div'
                  className='text-description'
                >
                  ¿Cúal será tu próximo destino?
                  <br />
                  Encuentra todos los detinos disponibles para ti.
                </Typography>
              </Container>
              <Box sx={{ flexGrow: 1 }} mt={5}>
                <Grid container spacing={4}>
                  {travels.map(travel => (
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={travel.id}>
                      <Travel travel={travel} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </section>
        )}
      </Container>
    </Layout>
  )
}
function Loader() {
  return (
    <Grid container spacing={4}>
      {Array.from(new Array(16)).map(index => (
        <Grid item key={index} sm={6} md={3} xs={6}>
          <Skeleton variant='rect' height={150} />
          <Box pt={1.5} mb={0.5}>
            <Skeleton />
            <Skeleton width='60%' />
          </Box>
          <Skeleton variant='rect' height={30} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Catalog

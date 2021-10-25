/* eslint-disable @next/next/no-page-custom-font */
import Header from '../header/Header'
import Head from 'next/head'
import { Button, CssBaseline } from '@material-ui/core'
import Container from '@material-ui/core/Container'
const Layout = props => {
  return (
    <>
      <Head>
        <title>Travleer</title>

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Satisfy&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </Head>
      <CssBaseline />
      <Header />

      {props.children}
    </>
  )
}

export default Layout

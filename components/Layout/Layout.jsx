import Header from '../header/Header'
import Head from 'next/head'
import { Button, CssBaseline } from '@material-ui/core'
import Container from '@material-ui/core/Container';
const Layout = props => {
  return (
    <>
      <Head>
        <title>Travleer</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=='
          crossOrigin='anonymous'
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

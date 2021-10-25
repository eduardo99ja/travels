import Link from 'next/link'
import { Button, Grid, Icon, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))
const Travel = ({ travel }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={travel.image[0]}
        title={travel.name}
      />
      <CardContent className='container_travel'>
        <Grid container>
          <Grid item xs>
            <Typography gutterBottom variant='h5' component='h4'>
              <Link href='/travels/[id]' as={`/travels/${travel._id}`}>
                <a className='travel_name'>{travel.name}</a>
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant='h5'
              component='span'
              className='travel_price'
            >
              ${travel.price}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <p className='travel_description'>{travel.description}</p>
        </Grid>
      </CardContent>
      <CardActions className='travel__actions-container'>
        <Grid container spacing={2}>
          <Grid item container xs spacing={1}>
            <Grid item>
              <span>
                <Icon className='far fa-clock ' />
              </span>
            </Grid>
            <Grid item>
              <div>{travel.days} Días</div>
            </Grid>
          </Grid>
          <Grid item xs container spacing={1}>
            <Grid item>
              <span>
                <Icon className='fas fa-map-marker-alt ' />
              </span>
            </Grid>
            <Grid item>
              <Link href='/travels/[id]' as={`/travels/${travel._id}`}>
                <a className='travel_city'>{travel.city}</a>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs container spacing={1}>
            <Grid item>
              <span>
                <Icon className='fas fa-info ' />
              </span>
            </Grid>
            <Grid item>
              <Link href='/travels/[id]' as={`/travels/${travel._id}`}>
                <a className='travel_city'>{travel.category}</a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default Travel

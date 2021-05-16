import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
      marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function Product({product}) {
  const classes = useStyles();
  //const [expanded, setExpanded] = React.useState(false);
  
  /*
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  */
  return (
    <Card className={classes.root}>
      <CardHeader
      
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
              {accounting.formatMoney(product.price,"S/.")}
          </Typography>
        }
        title={product.name}
        //subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
            Array(product.rating)
            .fill()
            .map((_,i)=>(
                    <p>&#11088;</p>
                )
            )
        }
        {/*
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        */}
        
          <IconButton aria-label="add to cart">
            <AddShoppingCart />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      {/*
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>
                Una descripcion
            </Typography>
        </CardContent>
      </Collapse>
      */}
    </Card>
  );
}

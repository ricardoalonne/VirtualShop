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
import { actionTypes } from '../../helpers/reducer';

import { useStateValue } from '../../helpers/StateProvider';

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
  },
  cardRating: {
    display:"flex",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  }
}));

export default function Product({product}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue()

  //const [expanded, setExpanded] = React.useState(false);
  
  /*
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  */

  const addToBasket = () => {
    dispatch(
      {
        type: actionTypes.ADD_TO_BASKET,
        item:{
          id: product.id,
          name: product.name,
          description: product.description,
          stock: product.stock,
          price: product.price,
          image: product.image,
          rating: product.rating,
          state: product.state,
          idProductType: product.idProductType,
          idCategory: product.idCategory,
        }
      }
    )
  }

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
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {
            Array(product.rating)
            .fill()
            .map((_,i)=>(
                    <p>&#11088;</p>
                )
            )
        }
        </div>

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
          <div>
            <IconButton aria-label="add to cart" onClick={addToBasket}>
              <AddShoppingCart fontSize="large" />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
          
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

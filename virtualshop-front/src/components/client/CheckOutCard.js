import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import accounting from "accounting";
import { useStateValue } from '../../helpers/StateProvider';
import { actionTypes } from '../../helpers/reducer';

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

export default function ChekOutCard({product}) {
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue()

  const removeItem = () => dispatch(
    {
      type: actionTypes.REMOVE_ITEM,
      id: product.id,
    }
  )

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
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      
      <CardActions disableSpacing className="cardActions">
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
        
        <IconButton aria-label="remove item" onClick={removeItem}>
            <DeleteIcon fontSize="large" />
        </IconButton>
    
      </CardActions>
      
    </Card>
  );
}
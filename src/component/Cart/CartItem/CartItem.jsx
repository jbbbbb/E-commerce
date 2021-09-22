import React from 'react'
import {Card, Button, CardAction, CardMedia, CardContent, Typography, CardActions} from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({ item }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
            </CardActions>
        </Card>
    )
}

export default CartItem

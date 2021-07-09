import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import { IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './cardstyling.css'


class  ProcessorProducts extends React.Component{
   constructor(){
      super();
   }
   render(){
    const  item=this.props.items;
return (
<Card className="root" variant="outlined">
    <CardHeader className="title" title={item.name}></CardHeader>
    <CardMedia className="media" image ={item.media.source}  title="cpu"/>
      <Accordion>
         <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className="price" >{item.price.formatted_with_symbol}</Typography>
               <CardActions className="addtoCart" >
                  <IconButton aria-label="add  to cart" color="secondary" onClick={()=>{  let productId=[];
                        productId.push(item.id);
                        console.log(productId);}} >
                     <AddShoppingCartRoundedIcon />
                  </IconButton>
               </CardActions>
         </AccordionSummary>
         <AccordionDetails>
            <CardContent className="content">
               <Typography  dangerouslySetInnerHTML={{__html:item.description }}  variant="body2" />
            </CardContent>
         </AccordionDetails>
      </Accordion>
</Card>
  )
}
}

function addToCart(id){
   let productid=[];
   productid.push(id);
   console.log(productid);
}
  export default ProcessorProducts;
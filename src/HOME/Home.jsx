import React from 'react'
 import Typography from '@material-ui/core/Typography';
import {FaStore} from "react-icons/fa"
import {Link} from 'react-router-dom'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Fab from '@material-ui/core/Fab'
import { ShoppingCart } from '@material-ui/icons';

 function Home()
{
    return(
        <div  >
            <Banner />
            <Bestproducts />
        </div>
        )
}

const Head=()=>
{
     return(
     <h1 >PC BUILD</h1> 
)}

function Navs(){
return(
    <div>
        <div className="Navs">
        <ul>
        <Link to="/">
            <img src="PCDelivery.png"/>
        </Link>
        <Link to="/processors">PROCESSORS  /</Link>
        <Link to="/Monitors">MONITORS  /</Link>
        <Link to="/GPU">GPUS  /</Link>
        <Link to="/Ram">RAMS  /</Link>
        <Link to="/Keyboards">KEYBOARDS  /</Link>
        <Link to="/Mouse">MOUSE  /</Link> 
        <Link to="/Others">OTHER ACCESORIES</Link>
        </ul>
        </div>
        </div>

)
}

 const Banner=()=>{
     return(
             <div className="WelcomeBanner">  
                <img src="pc.png" alt="off"/> 
               <div padding-left="30px"className="headers">
                <h1 padding="left" >
                WELCOME,
                </h1>
                <Typography variant="h4">Click on categories above  to start shopping.</Typography>
                <br></br>
                 <h3>Your currency, your location.</h3>
                 <br></br>
                 <Typography lineheight="1.7"  class="description">
                 At pcbuild  we  offer you a great variety of componets required to build a Personal Computer.Our products include components ranging from  mouse to more powerful processors.
                 Our best selling brands include AMD,INTEL,NVIDIA and many more</Typography>
                 <br></br>
                 <Typography  gutterbottom fontsize="20px" class="description">
                 We can assure with the lowest price and great deals and we also have easy returns.</Typography>
                 <br></br>
                    </div>
                    </div>                    
         )
}
const Bestproducts=()=>{
    const contentStyle={
        height: '260px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        width:'650px',
        margin:'20px',
    }
    return (
        <div>
      <div className="bestproducts">
        <Typography variant='h4'>Our best selling brands</Typography></div>
        <div>
        <Carousel autoplay className="carousel">
        <div>
          <img src="AMD.jpg" style={contentStyle}/>
        </div>
        <div>
        <img src="INTEL2.jpg" style={contentStyle} />
        </div>
        <div>
        <img src="Nvidia.jpg" style={contentStyle} />
        </div>
        <div>
        <img src="Razer.jpg" style={contentStyle} />
        </div>
        <div>
        <img src="Logitech.jpg" style={contentStyle} />
        </div>
        </Carousel>
        </div>
        </div>
    );

}
 export const Fabicon=()=>{
    const styling={
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        zIndex:2
    }
    return(
        <Fab color="primary" aria-label="addtocart" style={styling} >
            <Link to="/cart">         

       <ShoppingCart color="secondary"/>

              </Link>
        </Fab>
    )};

export default  Home
export   {Navs,Head}
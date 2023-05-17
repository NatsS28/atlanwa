import React from 'react'
import serviceLogo from '../images/serviceLogo.jpg';
import serv1 from '../images/icon_section/ser1.webp'
import serv2 from '../images/icon_section/ser2.webp'
import serv3 from '../images/icon_section/ser3.webp'

import d1 from '../images/designandprint.jpeg'
import d2 from '../images/print.jpeg'
import d3 from '../images/printandservice.jpeg'

// import serv4 from '../images/icon_section/ser4.webp'
// import serv5 from '../images/icon_section/ser5.webp'
// import serv6 from '../images/icon_section/ser6.webp'
// import serv7 from '../images/icon_section/ser7.webp'
// import serv8 from '../images/icon_section/ser8.webp'
// import serv9 from '../images/icon_section/ser9.webp'
// import serv10 from '../images/icon_section/ser10.webp'
// import serv11 from '../images/icon_section/ser11.webp'
// import serv12 from '../images/icon_section/ser12.webp'

import s1 from '../images/servicesIcons/s1.jpg';
import s2 from '../images/servicesIcons/s2.jpg';
import s3 from '../images/servicesIcons/s3.jpg';
import s4 from '../images/servicesIcons/s4.jpg';
import s5 from '../images/servicesIcons/s5.jpg';
import s6 from '../images/servicesIcons/s6.jpg';
import s7 from '../images/servicesIcons/s7.jpg';
import s8 from '../images/servicesIcons/s8.jpg';






import './Services.css';

import TabScrollButton from '@mui/material/TabScrollButton';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
// or


function Services() {
    const BColor = 'white';
    const color = 'black';
    return (
        <div className='services'>
            <h1 className='head_threeD_service'>Services</h1>
            <div className='top'>
                <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={d1}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Design and print
                        </Typography>

                    </CardContent>
                    <CardActions>

                        <Button className='btn_learn' size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={d2}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Print
                        </Typography>

                    </CardContent>
                    <CardActions>

                        <Button className='btn_learn' size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={d3}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            3D Printer Parts
                        </Typography>

                    </CardContent>
                    <CardActions>

                        <Button className='btn_learn' size="small">Learn More</Button>
                    </CardActions>
                </Card>
                {/* <div className='topsec'>
                    <img className='topsec_img' src={d1} alt='logo' />
                    <h5>Design and Print</h5>
                </div>
                <div className='topsec'>
                    <img className='topsec_img' src={d2} alt='logo' />
                    <h5>Print</h5>
                </div>
                <div className='topsec'>
                    <img className='topsec_img' src={d3} alt='logo' />
                    <h5>3D Printer Parts</h5>
                </div> */}
                {/* <img className='topsec_img' src={serviceLogo} alt='logo' />
                <img className='topsec_img' src={serviceLogo} alt='logo' /> */}
            </div>
            <div className='bottom'>
                <TabScrollButton className='tabscroll'/>
                <div className='scroll-container'>
                   
                    <div className='gridscroll'>
                        <img className='btmsec_img' src={s1} alt='' ></img>
                        {/* <h5>3d printing</h5> */}
                        <img className='btmsec_img' src={s2} alt='' />
                        {/* <h5>3d printing</h5> */}
                        <img className='btmsec_img' src={s3} alt='' />
                        <img className='btmsec_img' src={s4} alt='' />
                        <img className='btmsec_img' src={s5} alt='' />
                        <img className='btmsec_img' src={s6} alt='' />
                        <img className='btmsec_img' src={s7} alt='' />
                        <img className='btmsec_img' src={s8} alt='' />
                        {/* <img className='btmsec_img' src={serv12} alt='' /> */}
                        
                        {/* <div className='btmsec'>
                            <img className='btmsec_img' src={serviceLogo} alt='logo' />
                            <h5>3D printing Filament</h5>
                        </div>
                        <div className='btmsec'>
                            <img className='btmsec_img' src={serviceLogo} alt='logo' />
                            <h5>3D printing Filament</h5>
                        </div>
                        <div className='btmsec'>
                            <img className='btmsec_img' src={serviceLogo} alt='logo' />
                            <h5>3D printing Filament</h5>
                        </div>
                        <div className='btmsec'>
                            <img className='btmsec_img' src={serviceLogo} alt='logo' />
                            <h5>3D printing Filament</h5>
                        </div>
                        <div className='btmsec'>
                            <img className='btmsec_img' src={serviceLogo} alt='logo' />
                            <h5>3D printing Filament</h5>
                        </div>
                        <div className='btmsec'>
                            <img className='btmsec_img' src={serviceLogo} alt='logo' />
                            <h5>3D printing Filament</h5>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
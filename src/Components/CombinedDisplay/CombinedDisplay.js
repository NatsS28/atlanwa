import { Button, Card, CardActions, CardContent, CardMedia, TabScrollButton, Typography } from '@mui/material'
import React from 'react'
import serviceLogo from '../../images/serviceLogo.jpg';
import './CombinedDisplay.css'
import {Img,Img2 }from '../../data/drone_img'

function CombinedDisplay(props) {
    //colorful
    const secStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.886), rgba(36, 33, 35, 0.88))`,
        color: 'white'

    };

    //black
    const firstStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.886), rgba(36, 33, 35, 0.88))`,
        color: 'white'

    };
    const BColor = 'white';
    const color = 'black';
  return (
      <div>
          <div className='three_DServe_com' style={props.displayTime ==2 ? secStyle : firstStyle}>
              <h1 className='head_serveC'>{"We Serve"}</h1>
              <div className='icon'><TabScrollButton></TabScrollButton></div>
              <div className='topC'>
                  {
                      Img.map((img) => {
                          return (
                              //   <img className='btmsec_img_com' src={img.img} alt='' />
                              <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                                  <CardMedia
                                      sx={{ height: 140 }}
                                      image={img.img}
                                      title="green iguana"
                                  />
                                  <CardContent>
                                      <Typography gutterBottom variant="h5" component="div" style={{alignItems:'center',textAlign:'center',fontFamily:'times'}}>
                                            {img.name}
                                      </Typography>

                                  </CardContent>
                                  <CardActions>

                                      {/* <Button className='btn_learn' size="small">Learn More</Button> */}
                                  </CardActions>
                              </Card>
                          )
                      })
                  }
                      </div>

              <h1 className='head_serveC'>{"Products"}</h1>
              <div className='scroll-container_com'>

                  <div className='gridscroll'>

                      {
                          Img2.map((img) => {
                              return (
                                  <img className='btmsec_img_com' src={img.img} alt='' />
                              )
                          })
                      }

                    
                  </div>
              </div>
          </div>
          <div className='three_DServe_com'>
              
          </div>
     </div>
  )
}

export default CombinedDisplay
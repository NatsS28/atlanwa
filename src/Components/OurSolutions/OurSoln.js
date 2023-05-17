import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './OurSoln.css'
import threeD from '../../images/icon_section/threeDtop.jpeg';
import It from '../../images/it.jpeg';
import Robo from '../../images/icon_section/robo_icons/roboTob.jpeg';
import Drones from '../../images/drones.jpeg';
import BMS from '../../images/bms.jpg';




function OurSoln() {
    const BColor = 'white';
    const color = 'black';
  return (
      <div className='ourSoln'>
          <h1 className='head_ourSoln'>OUR SOLUTION</h1>
          <div className='cardContent'>
              <Card sx={{ maxWidth: 345,backgroundColor:`${BColor}`,color:`${color}`,padding:2 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image={threeD}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          3D Printing
                      </Typography>

                  </CardContent>
                  <CardActions>
        
                      <Button className='btn_learn' size="small">Learn More</Button>
                  </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image={It}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          IT Solution
                      </Typography>

                  </CardContent>
                  <CardActions>
        
                      <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image={Robo}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          Robotics
                      </Typography>

                  </CardContent>
                  <CardActions>
        
                      <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`, padding: 2 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image={Drones}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          Drones
                      </Typography>

                  </CardContent>
                  <CardActions>
        
                      <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, backgroundColor: `${BColor}`, color: `${color}`,padding: 2 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image={BMS}
                      title="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          BMS
                      </Typography>

                  </CardContent>
                  <CardActions>

                      <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
          </div>
      </div>
  )
}

export default OurSoln
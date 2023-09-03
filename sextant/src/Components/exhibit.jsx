import React from 'react'
//import './Exhibit.css';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Exhibit(props) {
  return (
    // <div className='Exhibit'>
    //             <h2 className='ExhibitHeading'>{props.name}</h2>
    //             <div className='ExhibitContent'>
    //                 {props.content}
    //             </div>
    //         </div>
            <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 24 }} variant="h5" gutterBottom>
          {props.name}
        </Typography>
      
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
     
    </Card>
  )
}

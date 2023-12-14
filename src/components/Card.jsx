
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardCompnent(props) {

  
  let  title = "Buy Now"
  let color  = {}
  let visibilite = "block"
  
  if(props.content === "0"){
    title = "Not availabel"
    color = {
      color : "red"
    }

    visibilite = "none"

  }else{
    color = {
      color : "green"
    }
    title = "Buy Now"

    visibilite = "block"
  }

  return (
    <Card sx={{ maxWidth: 345 , display:visibilite }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={color}>
          {title} ({props.content})
        </Button>
      </CardActions>
    </Card>
  );
}


export default CardCompnent
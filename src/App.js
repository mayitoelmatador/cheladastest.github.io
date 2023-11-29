import React, {useState} from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Modal,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Container from "@mui/material/Container";

import Data from "./Data.json";

import ImagenPortada from "./assets/Cheladas.jpeg";

import ImageArequipe from "./assets/img/Arequipe.jpeg";
import ImageBarrilete from "./assets/img/Barrilete.jpeg";
import ImageBubbaloo from "./assets/img/Buba.jpeg";
import ImageCafe from "./assets/img/Cafe.jpeg";
import ImageCereza from "./assets/img/Cereza.jpeg";
import ImageChocolate from "./assets/img/Chocolate.jpeg";
import ImageChocorramo from "./assets/img/Chocorramo.jpeg";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');
  const theme = useTheme();
  const isBetween = useMediaQuery(theme.breakpoints.between(0, 487));
  
  const handleClick = (event, result) => {
    let result1 = resultImage(result.id);
    setShowModal(true);
    setImage(result1);
  };

  const resultImage = (requestId) => {
    switch(requestId) {
      case 1: 
        return ImageArequipe;
      case 2: 
        return ImageBarrilete;
      case 3:
        return ImageBubbaloo;
      case 4:
        return ImageCafe;
      case 5: 
        return ImageCereza;
      case 6:
        return ImageChocolate;
      case 7:
        return ImageChocorramo;
      default:
        return ImageArequipe;
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <img
            src={ImagenPortada}
            alt="title"
            style={{ width:"auto", height: "150px", textAlign: "center", borderRadius: "20px" }}
          />
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "10px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={resultImage(result.id)}
                    alt="imagen"
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>{result.title}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant="contained" onClick={(e) =>  handleClick(e, result)} >
                    Ver imagen
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal
        open={showModal}
        onClose={handleClose}
        style={{ padding: '10px' }}
      >
        <Grid container>
          <Box sx={isBetween ? stylesResponsive : styles}>
            <img src={image} alt="title" style={{ maxHeight: "70%", maxWidth: "70%" }}/>
          </Box>
        </Grid>
      </Modal>
    </>
  );
}

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '25px',
};

const stylesResponsive = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 270,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '25px',
};

export default App;

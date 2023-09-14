import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import HeaderBar from '../header/header.tsx';
import './home.css';
import {useNavigate} from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      src: 'https://www.chelseacats.co.uk/wp-content/uploads/2017/03/Cheahire-Wain-navy-blue-luxury-leather-cat-collar.jpg',
      title: 'Collar',
      price: 'RM 12.00',
      color: 'Red, Yellow'
    },
    {
      id: 2,
      src: 'https://th.bing.com/th/id/OIP.yslLIQR2IuGxpd1y8eM5SQHaHa?pid=ImgDet&rs=1',
      title: 'Leash',
      price: 'RM 15.00',
      color: 'Red, Yellow'
    },
    {
      id: 3,
      src: 'https://www.bradleycaldwell.com/ccstore/v1/images/?source=/file/v4337648492387465547/products/067029.F.jpg',
      title: 'Leash',
      price: 'RM 20.50',
      color: 'Red, Yellow'
    },
    {
      id: 4,
      src: 'https://i.pinimg.com/736x/3c/c4/40/3cc440914d1dc5c14f890e307020f15a--fancy-dog-collars-shirt-collars.jpg',
      title: 'Bling Collar',
      price: 'RM 11.20',
      color: 'Red, Yellow'
    },
    {
      id: 5,
      src: 'https://www.pettag4life.ca/506-thickbox_default/cat-harness.jpg',
      title: 'Harness',
      price: 'RM 10.12',
      color: 'Red, Yellow'
    },
  ];
  console.log("in homepage")
  const onClickView = (id: number) => {
    navigate(`/productDetail/${id}`)
  }

  return (
    <>
    <Container>
      <div className='navBar'>
        <HeaderBar />
      </div>
      {/* <div style={{ marginLeft: -190, width: 60, display: "flex", height: 478.5, flexDirection: "row" }}>
        <img src={banner} />
        </div> */}
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to PurrfectPaws !
        </Typography>
      </Container>
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((data) => (
            <Grid item key={data.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '65%'
                  }}
                  image={data.src}
                />
                <Divider></Divider>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {data.title}
                  </Typography>
                  <Typography>
                    {data.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => onClickView(data.id)}>View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Container>
    </>

  );

}
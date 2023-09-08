import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import HeaderBar from "../header/header";
import { useState } from "react";
import { useParams } from "react-router-dom";


export default function ProductDetailsPage() {

    const [selectedValue, setSelectedValue] = useState('Red');
    const { productId } = useParams();

    const handleChange = (event) => {
        //setSelectedValue(event.target.value);
    };

    const data = [
        {
            id: 1,
            src: 'https://www.chelseacats.co.uk/wp-content/uploads/2017/03/Cheahire-Wain-navy-blue-luxury-leather-cat-collar.jpg',
            title: 'Collar',
            price: 'RM 12.00',
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            id: 2,
            src: 'https://th.bing.com/th/id/OIP.yslLIQR2IuGxpd1y8eM5SQHaHa?pid=ImgDet&rs=1',
            title: 'Leash',
            price: 'RM 15.00',
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            id: 3,
            src: 'https://www.bradleycaldwell.com/ccstore/v1/images/?source=/file/v4337648492387465547/products/067029.F.jpg',
            title: 'Leash',
            price: 'RM 20.50',
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            id: 4,
            src: 'https://i.pinimg.com/736x/3c/c4/40/3cc440914d1dc5c14f890e307020f15a--fancy-dog-collars-shirt-collars.jpg',
            title: 'Blink Collar',
            price: 'RM 11.20',
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            id: 5,
            src: 'https://www.pettag4life.ca/506-thickbox_default/cat-harness.jpg',
            title: 'Harness',
            price: 'RM 10.12',
            color: ['Red', 'Yellow', 'Blue'],
            size: ['S', 'M', 'L']
        },
    ];

    const product = data.find((product) => product.id === Number(productId));


    console.log(product, "ewr")

    return (
        <><div className='navBar'>
            <HeaderBar />
        </div>
            <Card sx={{ maxWidth: 1000, maxHeight: 700 }}>
                {product ? (
                    <><CardMedia
                        sx={{ height: 300, width: 500 }}
                        image={product?.src}
                        title="green iguana" />
                        <Divider sx={{ borderBottomWidth: 3 }} />
                        <CardContent>
                            <Grid item>
                                <Typography gutterBottom variant="h4" component="div" align="left">
                                    {product?.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h5" component="div" align="left">
                                    {product?.price}
                                </Typography>
                            </Grid>
                            <div style={{ width: '100%' }}>
                                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 6fr)' }}>
                                    <FormControl >
                                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{display:"flex"}}>Colour</FormLabel>
                                        
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            {product.color.map((color) => (
                                                <FormControlLabel value={color} control={<Radio />} label={color} />
                                            ))
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{display:"flex"}}>Size</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            {product.size.map((size) => (
                                                <FormControlLabel value={size} control={<Radio />} label={size} />
                                            ))
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </div>
                        </CardContent>
                        <CardActions>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            size="small"
                        >
                            Add to cart
                        </Button>
                        </CardActions></>
                ) : ""}
            </Card></>

    )

}
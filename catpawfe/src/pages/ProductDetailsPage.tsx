import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
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
            title: 'Blink Collar',
            price: 'RM 11.20',
            color: [{
                red: 'Red',
                yellow: 'Yellow'
        }]
        },
        {
            id: 5,
            src: 'https://www.pettag4life.ca/506-thickbox_default/cat-harness.jpg',
            title: 'Harness',
            price: 'RM 10.12',
            color: 'Red, Yellow',
            size: 'S,M,L'
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
                        title="green iguana" /><CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                <Typography gutterBottom variant="h4" component="div">
                                    `${product?.title}${product?.price}`
                                </Typography>
                            </Box>
                            <Typography variant="h5" color="text.secondary" sx={{ marginLeft: -40 }}>
                                {product?.price}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Color</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={selectedValue}
                                        onChange={handleChange}
                                    >
                                        {/* {product?.color.map((color) => (

                                        ))} */}
                                        <FormControlLabel value="red" control={<Radio />} label="Red" />
                                        <FormControlLabel value="green" control={<Radio />} label="Green" />
                                        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Size</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={selectedValue}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="red" control={<Radio />} label="Red" />
                                        <FormControlLabel value="green" control={<Radio />} label="Green" />
                                        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </CardContent><CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions></>
                ) : ""}
            </Card></>

    )

}
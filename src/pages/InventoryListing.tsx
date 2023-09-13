import { Avatar, Container, Paper, Table, TableBody, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import HeaderBar from "../header/header";

export default function InventoryListing() {

    const data = [
        {
            src: 'https://www.chelseacats.co.uk/wp-content/uploads/2017/03/Cheahire-Wain-navy-blue-luxury-leather-cat-collar.jpg',
            title: 'Collar',
            price: 'RM 12.00',
            quantity: "10",
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            src: 'https://th.bing.com/th/id/OIP.yslLIQR2IuGxpd1y8eM5SQHaHa?pid=ImgDet&rs=1',
            title: 'Leash',
            price: 'RM 15.00',
            quantity: "1",
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            src: 'https://www.bradleycaldwell.com/ccstore/v1/images/?source=/file/v4337648492387465547/products/067029.F.jpg',
            title: 'Leash',
            price: 'RM 20.50',
            quantity: "15",
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            src: 'https://i.pinimg.com/736x/3c/c4/40/3cc440914d1dc5c14f890e307020f15a--fancy-dog-collars-shirt-collars.jpg',
            title: 'Blink Collar',
            price: 'RM 11.20',
            quantity: "5",
            color: ['Red', 'Yellow'],
            size: ['S', 'M', 'L']
        },
        {
            src: 'https://www.pettag4life.ca/506-thickbox_default/cat-harness.jpg',
            title: 'Harness',
            price: 'RM 10.12',
            quantity: "3",
            color: ['Red', 'Yellow', 'Blue'],
            size: ['S', 'M', 'L']
        },
    ];

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#ceebfa",
            color: theme.palette.common.black,
            fontSize: 20,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 18,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <>
            <Container>
                <div className='navBar'>
                    <HeaderBar />
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: "100%", maxHeight:"100%" }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="center">Product</StyledTableCell>
                                <StyledTableCell align="center">Quantity</StyledTableCell>
                                <StyledTableCell align="center">Price</StyledTableCell>
                                <StyledTableCell align="center">Colour</StyledTableCell>
                                <StyledTableCell align="center">Size</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.title}>
                                    <StyledTableCell><Avatar src={row.src} /></StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                                    <StyledTableCell align="center">{row.size.join(",")}</StyledTableCell>
                                    <StyledTableCell align="center">{row.color.join(",")}</StyledTableCell>
                                    <StyledTableCell align="center"><ModeEditIcon /></StyledTableCell>
                                    <StyledTableCell align="center"><DeleteIcon /></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </>
    )

}
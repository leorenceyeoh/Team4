import { Container } from '@mui/material';
import HeaderBar from '../header/header.tsx';
import './home.css';

export default function UserProfile() {

  return (
    <Container>
      <div className='navBar'>
        <HeaderBar />
      </div>
    </Container>
  );

}
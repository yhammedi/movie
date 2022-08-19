import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { movieData } from '../constant/data';
import {Col,Row,Container, Button } from 'react-bootstrap'
function Desc() {
    const params=useParams()
    const navigate=useNavigate()
    const movies=movieData?.find((movi)=>movi.title == params.title)
    
  return <div id='b'>
      <h1>   {params.title} </h1>
      <Container>
  <Row>
    <Col sm={8}>
      <div id='specs'>
      <br/>
        <h3 onClick={()=>navigate('*')}>trailer: {movies.desc.trailer}</h3>
        <br/>
        <h2>description: {movies.desc.description}</h2>
        
    
      </div>
    </Col>
    <Col sm={4}><img src={movies.posterUrl} />   </Col>
  </Row>
  </Container> 
  <div className='but'>
<Button onClick={()=>navigate('/Movies')} >Movies</Button>
<Button onClick={()=>navigate('/')} >  Home </Button>
</div>
  </div>;
}

export default Desc;

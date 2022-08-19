import React from 'react';
import {Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function MddC({films}) {
    let navigate=useNavigate()
  return <div >
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={films.posterUrl} />
  <Card.Body className='cc'>
    <Card.Title>{films.title}</Card.Title>
    <Card.Text>
    {films.rate}
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate(`/Movies/description/${films.title}`)} >Trailer/description</Button>
  </Card.Body>
</Card>
  </div>;
}

export default MddC;

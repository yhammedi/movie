import React from 'react';
import { movieData } from '../constant/data';
import MddC from './MddC';

function MovieCard() {
  return <div id='Film'>
     
      {movieData?.map((el)=><MddC films={el} key={el.id} />     )}
  </div>;
}
// we9fet fel mapping mzelli desc bech n3ml affiche wahdo

export default MovieCard;

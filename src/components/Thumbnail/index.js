import React from 'react';

//Styles
import { Image } from './thumbnail.styles';

const Thumbnail = ({ image, movieid, clickable }) => (
  <div>
    <Image src={image} alt='Movie-thumbnail'/>
  </div>
);

export default Thumbnail;

import React from 'react';
import './DogDetail.css';

export default function DogDetail(props) {
  const dog = props.dog;

  return (
    <div className="dog-detail">
      <h2>{dog[0].name}</h2>
      <img className="detail-image" src={dog[0].image} alt="dog" />
      <p>{dog[0].bio}</p>
    </div>
  );
}

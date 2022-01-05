import React from 'react';
import './DogDetail.css';
import { Link } from 'react-router-dom';

export default function DogDetail(props) {
  const dog = props.dog;

  return (
    <div className="dog-detail">
      <h2 className="detail-title">{dog[0].name}</h2>
      <p className="details">
        {dog[0].name} is a(n) {dog[0].age} year old {dog[0].breed}.
      </p>
      <img className="detail-image" src={dog[0].image} alt="dog" />
      <p className="detail-bio">{dog[0].bio}</p>
      <Link to="/dogs/:id/edit">Edit</Link>
      <Link to="/">Delete</Link>
    </div>
  );
}

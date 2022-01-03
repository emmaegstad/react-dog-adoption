import React from 'react';
import './DogList.css';
import { Link } from 'react-router-dom';

export default function DogList({ id, name, image }) {
  return (
    <div>
      <Link key={id} to={`/dogs/${id}`}>
        <div className="dog-card">
          <img className="dog-image" src={image} alt="dog" />
          {name}
        </div>
      </Link>
    </div>
  );
}

import React from 'react';
import './DogList.css';
import { Link } from 'react-router-dom';

export default function DogList({ id, name, image, breed }) {
  return (
    <div>
      <div className="dog-card">
        <span className="dog-name">{name}</span>
        <span className="dog-breed">Breed: {breed}</span>
        <Link className="links" key={id} to={`/dogs/${id}`}>
          <img className="dog-image" src={image} alt="dog" />
          <span className="more-info">Find Out More!</span>
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import './DogDetail.css';
import { Link, useHistory } from 'react-router-dom';
import { deleteDogById } from '../services/dogs';

export default function DogDetail(props) {
  const dog = props.dog;
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDogById(props.dog.id);
    history.push('/');
  };

  return (
    <div className="dog-detail">
      <h2 className="detail-title">{dog.name}</h2>
      <p className="details">
        {dog.name} is a(n) {dog.age} year old {dog.breed}.
      </p>
      <img className="detail-image" src={dog.image} alt="dog" />
      <p className="detail-bio">{dog.bio}</p>
      <Link to={`/dogs/${dog.id}/edit`}>Edit</Link>
      <Link to="/dogs" onClick={handleDelete}>
        Delete
      </Link>
    </div>
  );
}

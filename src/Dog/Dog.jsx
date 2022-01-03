import React from 'react';
import './Dog.css';
import DogDetail from '../DogDetail/DogDetail';
import { fetchDogById } from '../services/dogs';
import { useState, useEffect } from 'react';

export default function Dog(props) {
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h3 className="loader">loading...</h3>;
  return (
    <div className="dog">
      <DogDetail id={id} dog={dog} />
    </div>
  );
}

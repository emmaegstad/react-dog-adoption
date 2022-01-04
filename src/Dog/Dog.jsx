import React from 'react';
import './Dog.css';
import DogDetail from '../DogDetail/DogDetail';
import { fetchDogById } from '../services/dogs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Dog(props) {
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState();
  //   const id = props.match.params.id;
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <h3 className="loader">loading...</h3>;
  return (
    <div className="dog">
      <DogDetail id={params.id} dog={dog} />
    </div>
  );
}

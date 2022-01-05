import React from 'react';
import './Dogs.css';
import DogList from '../DogList/DogList';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../services/dogs';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h3 className="loader">loading...</h3>;
  return (
    <div className="dogs">
      {dogs.map((dog) => {
        return <DogList key={dog.id} id={dog.id} {...dog} />;
      })}
    </div>
  );
}

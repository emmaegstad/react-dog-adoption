import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../Form/Form';
import { fetchDogById, updateDog } from '../services/dogs';
import './Edit.css';

export default function Edit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      setName(resp.name);
      setAge(resp.age);
      setBreed(resp.breed);
      setBio(resp.bio);
      setImage(resp.image);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(params.id, name, age, breed, bio, image);
  };

  return (
    <div className="Edit">
      <Form
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

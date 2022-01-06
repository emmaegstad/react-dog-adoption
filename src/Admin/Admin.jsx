import './Admin.css';
import Form from '../Form/Form';
import { useState } from 'react';
import { createDog } from '../services/dogs';
import { useHistory } from 'react-router-dom';

export default function Admin() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createDog(name, age, breed, bio, image);
    history.push(`/dogs/${data[0].id}`);
  };

  return (
    <div className="Admin">
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

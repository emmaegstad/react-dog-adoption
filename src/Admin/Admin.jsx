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
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createDog(name, age, breed, bio, image);
      setMessage('Yay! We successfully added your dog. Redirecting to the new entry...');
      setTimeout(() => {
        history.push(`/dogs/${data[0].id}`);
      }, 3000);
    } catch {
      setMessage('Oops! We were not able to add your dog.');
    }
  };

  return (
    <div className="Admin">
      <p className="message">{message}</p>
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

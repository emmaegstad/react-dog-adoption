import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import { fetchDogById, updateDog } from '../services/dogs';
import './Edit.css';

export default function Edit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();
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
    try {
      e.preventDefault();
      await updateDog(params.id, name, age, breed, bio, image);
      setMessage('Yay! Your dog has been updated. Redirecting to the detail page...');
      setTimeout(() => {
        history.push(`/dogs/${params.id}`);
      }, 3000);
    } catch {
      setMessage('Oops! We were not able to update your dog.');
    }
  };

  return (
    <div className="Edit">
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

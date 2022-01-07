import './Form.css';

export default function Form({
  name,
  setName,
  bio,
  setBio,
  image,
  setImage,
  age,
  setAge,
  breed,
  setBreed,
  handleSubmit,
}) {
  return (
    <form className="Form">
      <h1 className="form-title">Enter Dog Details</h1>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Breed:</label>
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => {
          setBreed(e.target.value);
        }}
      />
      <label>Age:</label>
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <label>Image:</label>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <label>Bio:</label>
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
      <button className="form-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

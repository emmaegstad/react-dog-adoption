import { checkError, client } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select().order('name');
  return checkError(response);
}

export async function fetchDogById(id) {
  const response = await client.from('dogs').select('*').match({ id }).limit(1).single();
  return checkError(response);
}

export async function updateDog(id, name, age, breed, bio, image) {
  const updatedDog = await client
    .from('dogs')
    .update({ name, age, breed, bio, image })
    .eq('id', id);
  return checkError(updatedDog);
}

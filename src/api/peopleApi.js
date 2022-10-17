import api from './default';

const getPeople = async () => {
    const response = await api.get('/people');
    return response.data;
}

const addPerson = async (request) => {
    await api.post("/people",request);
    getPeople();
}

// const deletePerson = async (id) => {
//     await api.delete(`/people/${id}`);
//     getPeople();   
// }

// const editPerson = async (personToEdit) => {
//     await api.put(`/people/${personToEdit.id}`, personToEdit);
//     getPeople();
// }

export {getPeople, addPerson};
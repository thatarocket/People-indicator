import api from './default';

const getStructures = async () => {
    const response = await api.get('/structures');
    return response.data;
}

export {getStructures};

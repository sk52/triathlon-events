export const getEvents = async () => {
    const events = await axios.get(`/api/events`).then((response) => {
        return response.data;
    });
};

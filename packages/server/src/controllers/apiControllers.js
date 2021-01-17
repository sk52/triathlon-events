const eventsApi = require('../services/triathlonEventsService');
const apiHelpers = require('../utils/apiHelpers');

const getEvents = async (req, res) => {
    const rawEvents = await eventsApi.getEvents();

    const events = apiHelpers.transformBritishTriathlonEvent(rawEvents);

    res.status(200);
    res.send(events);
};
exports.getEvents = getEvents;

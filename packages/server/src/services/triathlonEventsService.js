const fetch = require('node-fetch');
const config = require('config');
const HttpError = require('../../utils/httpError');

async function getEvents () {
    let result;

    try {
        const url = config.get('api.britishTriathlonUrl');
        const apiResponse = await fetch(url);
        result = await apiResponse.json();
    } catch (err) {
        const apiError = new HttpError(
            'Error, could not connect to external API',
            500
        );
        throw(apiError);
    }
    return result;
}

exports.getEvents = getEvents;

function transformBritishTriathlonEvent(rawEvent) {
    return rawEvent.items
        .map((event) => {
            if (event.state !== 'deleted' && event.data) {
                let transformedEvent = {};
                const eventData = event.data;

                transformedEvent.name = eventData.name ? eventData.name : '';
                transformedEvent.url = eventData.url ? eventData.url : '';
                transformedEvent.date = eventData.startDate
                    ? eventData.startDate
                    : '';
                transformedEvent.description = eventData.description
                    ? eventData.description
                    : '';
                transformedEvent.location = {};
                transformedEvent.location.name = eventData.location.name
                    ? eventData.location.name
                    : '';
                transformedEvent.location.geo = {};
                transformedEvent.location.geo.lat = eventData.location.geo
                    .latitude
                    ? eventData.location.geo.latitude
                    : '';
                transformedEvent.location.geo.long = eventData.location.geo
                    .longitude
                    ? eventData.location.geo.longitude
                    : '';
                transformedEvent.organizer = eventData.organizer.name
                    ? eventData.organizer.name
                    : '';
                transformedEvent.type = eventData['btf:raceTypes']
                    ? eventData['btf:raceTypes']
                    : '';
                transformedEvent.eventFeatures = eventData['btf:eventFeatures']
                    ? eventData['btf:eventFeatures']
                    : '';

                return transformedEvent;
            } else {
                return undefined;
            }
        })
        .filter(Boolean);
}

exports.transformBritishTriathlonEvent = transformBritishTriathlonEvent;

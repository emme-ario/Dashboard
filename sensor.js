class Position {
    constructor(lat, lng, place, state_code) {
        this.lat = lat
        this.lng = lng
        this.place = place
        this.state_code = state_code
    }
}

class Sensor {
    constructor(description, id, lat, lng, place, readonly, state_code, value) {
        this.description = description
        this.id = id
        this.position = new Position(lat, lng, place, state_code)
        this.readonly = readonly
        this.value = value
    }

    toggleSensor() {
        fetch('https://hf3xzw.deta.dev/' + this.id + '/toggle', {method: 'PUT'})
        .then(response => response.json())
        // .then(result => {console.log('Success:', result)})
        .catch(error => console.error('Error:', error))
    }
}

function JSONToSensor(json) {
    return new Sensor(
        json.description,
        json.id,
        json.lat,
        json.lng,
        json.place,
        json.readonly,
        json.state_code,
        json.value
    );
}

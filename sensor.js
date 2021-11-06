class Position {
    constructor(lat, lng, place, stateCode) {
        this.lat = lat
        this.lng = lng
        this.place = place
        this.stateCode = stateCode
    }
}

class Sensor {
    constructor(description, id, lat, lng, place, readonly, stateCode, value) {
        this.description = description
        this.id = id
        this.position = new Position(lat, lng, place, stateCode)
        this.readonly = readonly
        this.value = value
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
        json.stateCode,
        json.value
    );

}
class Position {
    constructor(lat, lng, place) {
        this.lat = lat
        this.lng = lng
        this.place = place
    }
}

class Sensor {
    constructor(description, id, readonly, stateCode, value) {
        this.description = description
        this.id = id
        this.position = []
        this.readonly = readonly
        this.stateCode = stateCode
        this.value = value
        this.tags = []
    }
}
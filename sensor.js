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
        this.position = 
        this.readonly = readonly
        this.stateCode = stateCode
        this.value = value
        this.tags = []
    }

    addTag(tag) {
        this.tags.push(tag)
    }
}

function JSONToSensor(jsonObject) {
    const {
        strSensor: description,
        strId: id,
        strReadonly: readonly,
        strStateCode: stateCode,
        strValue: value,
        strTags
    } = jsonObject

    const sensor = new Sensor(description, id, readonly, stateCode, value)

    if (strTags) {
        const tags = strTags.split(",")

        for (const tag of tags) {
            sensor.addTag(tag)
        }
    }

    console.log(sensor)
    return sensor
}
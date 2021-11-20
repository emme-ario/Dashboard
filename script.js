const sensors = []

fetch("https://hf3xzw.deta.dev/")
.then(r => r.json())
.then(body => {
    console.log(body)

    // Turns JSON into Array 
    body["sensors"].forEach(element => {
        sensors.push(JSONToSensor(element))
    })

    // Manages Light1 Sensor
    document.getElementById("light1").onclick = () => {
        switchLight1()
    }
    
    // Manages Light2 Sensor
    document.getElementById("light2").onclick = () => {
        switchLight2()
    }
    
    // Manages Door Sensor
    document.getElementById("door").onclick = () => {
        changeDoorState()
    }
    
    let gMapsStrings = [
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.5374099798155!2d-88.6486029362001!3d46.08900277133453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3bc56e5397ce22!2zNDbCsDA1JzMzLjgiTiA4OMKwMzgnMzIuNSJX!5e1!3m2!1sen!2sit!4v1637362075277!5m2!1sen!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen=""  loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0722025302325!2d74.85630131496058!3d31.280919981449454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3405b527e074817!2zMzHCsDE2JzUxLjMiTiA3NMKwNTEnMzAuNiJF!5e1!3m2!1sit!2sus!4v1637365133567!5m2!1sit!2sus" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.9764696606876!2d32.61561131544983!3d46.65580997913303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8254d0c44650ee2!2zNDbCsDM5JzIwLjkiTiAzMsKwMzcnMDQuMSJF!5e1!3m2!1sen!2sit!4v1637368819808!5m2!1sen!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8400301105717!2d-117.14610868499534!3d32.91559998093042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31cb47682f4bd83c!2zMzLCsDU0JzU2LjIiTiAxMTfCsDA4JzM4LjEiVw!5e1!3m2!1sen!2sit!4v1637368858292!5m2!1sen!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.6127215944607!2d78.14578131464285!3d15.451439989265163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd87ff3649c5c081d!2zMTXCsDI3JzA1LjIiTiA3OMKwMDgnNTIuNyJF!5e0!3m2!1sit!2sit!4v1637369560088!5m2!1sit!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.3026081221537!2d23.222811315703012!3d43.41250387597931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4674f0d86883bbd3!2zNDPCsDI0JzQ1LjAiTiAyM8KwMTMnMzAuMCJF!5e0!3m2!1sit!2sit!4v1637369737432!5m2!1sit!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.4621047250089!2d24.144431316255833!3d65.848109984393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x355d86db3dcfe090!2zNjXCsDUwJzUzLjIiTiAyNMKwMDgnNDcuOCJF!5e0!3m2!1sit!2sit!4v1637369872675!5m2!1sit!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.771552808214!2d24.039231315752797!3d54.39634998021247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5ea122b37e3f2d8!2zNTTCsDIzJzQ2LjkiTiAyNMKwMDInMjkuMSJF!5e0!3m2!1sit!2sit!4v1637369944904!5m2!1sit!2sit" width="auto" height="100%" style="border-radius: 20px; border: 1px;" allowfullscreen="" loading="lazy"></iframe>'
    ]

    // Fills the pop-up with sensors data
    for(let i = 0; i < 8; i++) {
        document.getElementById("details" + (i+1)).onclick = () => {
            openPopup()
            document.getElementById("popup").innerHTML =`
                                                        <div class="popup-container">
                                                            <h2 style="font-size: 2em;">${sensors[i].description}</h2><br>
                                                            <h4>Position:</h4>
                                                            <p>lat: ${sensors[i].position.lat}</p>
                                                            <p>lng: ${sensors[i].position.lng}</p>
                                                            <p>${sensors[i].position.place}, ${sensors[i].position.state_code}<p>
                                                            <h4>Value: ${sensors[i].value}</h4>
                                                        </div>
                                                        <div>${gMapsStrings[i]}</div>
                                                        `
        }
    }
    
    const temperatureValues = []
    const humidityValues = []
    const cleanCodeValues = []
    const lightValues = []

    // let index = 0

    for(let i = 0; i < 10; i++) {
        fetch("https://hf3xzw.deta.dev/")
        .then(r => r.json())
        .then(body => {
            const tempSensor5 = JSONToSensor(body["sensors"][4])
            const tempSensor6 = JSONToSensor(body["sensors"][5])
            const tempSensor7 = JSONToSensor(body["sensors"][6])
            const tempSensor8 = JSONToSensor(body["sensors"][7])
            temperatureValues.push(tempSensor5.value)
            humidityValues.push(tempSensor6.value)
            cleanCodeValues.push(tempSensor7.value)
            lightValues.push(tempSensor8.value)
        })
    }
    
    document.getElementById("chartsBtn").onclick = () => {
        openPopup()
        document.getElementById("popup").innerHTML = `<canvas id="myChart" width="400" height="150"></canvas>`
        initChart(temperatureValues, humidityValues, cleanCodeValues, lightValues)
    }

    document.getElementById("popup").onclick = () => {
        closePopup()
    }

    initMap()
})

function setContent(id, content) {
    document.getElementById(id).innerHTML = content
}

function openPopup() {
    const popup = document.getElementById("popup")
    popup.classList.add("show")
}

function closePopup() {
    const popup = document.getElementById("popup")
    popup.classList.remove("show")
}

const lightOff = "https://img.icons8.com/ios/50/000000/light.png"
const lightOn = "https://img.icons8.com/ios/50/000000/light-on.png"

function switchLight1() {
    const lightSwitch1 = document.getElementById("light1")
    lightSwitch1.classList.toggle("switch1")

    if(document.getElementById("light-img1").src.match(lightOff))
        document.getElementById("light-img1").src = lightOn
    else
        document.getElementById("light-img1").src = lightOff
    
    sensors[0].toggleSensor()
}

function switchLight2() {
    const lightSwitch2 = document.getElementById("light2")
    lightSwitch2.classList.toggle("switch2")

    if(document.getElementById("light-img2").src.match(lightOff))
        document.getElementById("light-img2").src = lightOn
    else
        document.getElementById("light-img2").src = lightOff

    sensors[1].toggleSensor()
}

const doorClosed = "https://img.icons8.com/ios/50/000000/door-closed.png"
const doorOpened = "https://img.icons8.com/ios/50/000000/door-sensor-checked.png"

function changeDoorState() {
    const lightSwitch1 = document.getElementById("door")

    if(document.getElementById("door-img").src.match(doorClosed))
        document.getElementById("door-img").src = doorOpened
    else
        document.getElementById("door-img").src = doorClosed
    
    sensors[2].toggleSensor()
}

function printData() {
    for(let i = 0; i < 8; i++)
        console.log(sensors[i])
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
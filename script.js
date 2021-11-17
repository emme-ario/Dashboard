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
    
    // Fills the pop-up with sensors data
    for(let i = 0; i < 8; i++) {
        document.getElementById("details" + (i+1)).onclick = () => {
            togglePopup()
            document.getElementById("popup").innerHTML = `
                                                        <a id="close-btn" class="close-btn" onclick="togglePopup()"><img src="https://img.icons8.com/material/24/000000/multiply--v1.png"/></a>
                                                        <div class="popup-container">
                                                            <h2>${sensors[i].description}</h2>
                                                            <p>Position:</p>
                                                            <p>${sensors[i].position.lat}</p>
                                                            <p>${sensors[i].position.lng}</p>
                                                            <p>${sensors[i].position.place}<p>
                                                            <p>${sensors[i].position.state_code}</p>
                                                            <h4>Value:</h4>
                                                            <p>${sensors[i].value}</p>
                                                        </div>
                                                        `
        }
    }
})

function setContent(id, content) {
    document.getElementById(id).innerHTML = content
}

function togglePopup() {
    const popup = document.getElementById("popup")
    popup.classList.toggle("show")
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
    
    toggleSensor()
}

function switchLight2() {
    const lightSwitch2 = document.getElementById("light2")
    lightSwitch2.classList.toggle("switch2")

    if(document.getElementById("light-img2").src.match(lightOff))
        document.getElementById("light-img2").src = lightOn
    else
        document.getElementById("light-img2").src = lightOff

    sensors[3].toggleSensor()
}

function printData() {
    for(let i = 0; i < 8; i++)
        console.log(sensors[i])
}

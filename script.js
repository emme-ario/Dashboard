fetch("https://hf3xzw.deta.dev/")
.then(r => r.json())
.then(body => {
    console.log(body)

    // Turns JSON into Array 
    const sensors = []
    body["sensors"].forEach(element => {
        sensors.push(JSONToSensor(element))
    })

    for(let i = 0; i < 8; i++) {
        console.log(sensors[i])

        document.getElementById("popup").innerHTML = `
                                                    <div class="popup-container">
                                                    <h2>${sensors[i].description}</h2>
                                                    <p>Position:</p>
                                                    <p>${sensors[i].position.lat}</p>
                                                    <p>${sensors[i].position.lng}</p>
                                                    <p>${sensors[i].position.place}<p>
                                                    <p>${sensors[i].position.state_code}</p>
                                                    </div>
                                                    `
    }
})

function setContent(id, content) {
    document.getElementById(id).innerHTML = content 
}

function togglePopup() {
    const popup = document.getElementById("popup")
    popup.classList.toggle("show")
}

function switchLight() {
    const lightSwitch = document.getElementById("light-switch")
    lightSwitch.classList.toggle("switch")
    console.log("switch :D")
}














// function switchLight1() {
    //     const lightOn = "#4eb7ff"
//     const lightOff = "#2f6e99"

//     let switchValue = false

//     if(!switchValue) {
//         document.getElementById("light1").style.background = lightOn
//         // switchValue = true
//     }
    
//     else if (switchValue) {
//         document.getElementById("light1").style.background = lightOff
//         // switchValue = false
//     }    
// }

// function switchLight2() {
//     const lightOn = "#fd6494"
//     const lightOff = "#993d58"

//     let switchValue = false

//     if(!switchValue) {
//         document.getElementById("light2").style.background = lightOn
//         // switchValue = true
//     }
    
//     else if (switchValue) {
//         document.getElementById("light2").style.background = lightOff
//         // switchValue = false
//     }    
// }

// function switchLight1Img() {
//     const lightOnSrc = "https://img.icons8.com/ios/50/000000/light-on.png"
//     const lightOffSrc = "https://img.icons8.com/ios/50/000000/light.png"

//     let switchValue = false

//     if(!switchValue) {
//         document.getElementById("light1Img").src = lightOnSrc
//         // switchValue = true
//     }
    
//     else if(switchValue) {
//         document.getElementById("light1Img").src = lightOffSrc
//         // switchValue = false
//     }
// }

// function switchLight2Img() {
//     const lightOnSrc = "https://img.icons8.com/ios/50/000000/light-on.png"
//     const lightOffSrc = "https://img.icons8.com/ios/50/000000/light.png"

//     let switchValue = false

//     if(!switchValue) {
//         document.getElementById("light2Img").src = lightOnSrc
//         // switchValue = true
//     }
    
//     else if(switchValue) {
//         document.getElementById("light2Img").src = lightOffSrc
//         // switchValue = false
//     }
// }
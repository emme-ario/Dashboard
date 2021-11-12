
fetch("https://hf3xzw.deta.dev/")
.then(r => r.json())
.then(body => {
    console.log(body)

    JSONToSensor(body)

    // Turns JSON into Array 
    const sensors = []
    body["sensors"].forEach(element => {
        sensors.push(JSONToSensor(element))
    })

    // setVisible("sensor", true)
    // setVisible("position", true)
    // setVisible("value", true)

    for(let i = 0; i < 8; i++) {
        console.log(sensors[i].description)

        setContent("sensor-description-" + i, sensors[i].description)
        
    }

    // document.getElementById("light1").addEventListener("click", switchLight1)
    // document.getElementById("light2").addEventListener("click", switchLight2)
    
    // document.getElementById("light1Img").addEventListener("click", switchLight1Img)
    // document.getElementById("light2Img").addEventListener("click", switchLight2Img)
    
    // switchLights("light")
})

/*
function setVisible(id, visible) {
    let value = "none"
    
    if(visible === true) {
        value = "block"
    }
    
    document.getElementById(domid).style.display = value
}
*/

function setContent(id, content) {
    document.getElementById(id).innerHTML = content 
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
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

    setContent("sensor-description", sensors[0].description)
    
    setContent("sensor-lat", sensors[0].position.lat)
    setContent("sensor-lng", sensors[0].position.lng)
    setContent("sensor-place", sensors[0].position.place)
    setContent("sensor-state_code", sensors[0].position.state_code)

    setContent("sensor-value", sensors[0].value)
})

/*
function setVisible(domId, visible) {
    let value = "none"
    
    if(visible === true) {
        value = "block"
    }
    
    document.getElementById(domId).style.display= value
}
*/

function setContent(domId,content) {
    document.getElementById(domId).innerHTML = content 
}
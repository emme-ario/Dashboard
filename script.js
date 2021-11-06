fetch("https://hf3xzw.deta.dev/")
.then(r => r.json())
.then(body => {
    console.log(body)

    JSONToSensor(body)

    // Turns JSON into Array 
    const sensors = []
    body["sensors"].forEach(element => {
        sensors.push(JSONToSensor(element))
    });

    setVisible("sensor", true)
    

    setContent("sensor-description", sensors[0].description)
})

function setVisible(domId, visible) {
    let value = "none"
    
    if(visible === true) {
        value = "block"
    }
    
    document.getElementById(domId).style.display= value
}

function setContent(domId,content) {
    document.getElementById(domId).innerHTML = content 
}
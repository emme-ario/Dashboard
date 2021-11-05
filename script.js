const debug = document.getElementById("debug")

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

fetch("https://hf3xzw.deta.dev/")
.then(r => r.json())
.then(body => {
    debug.innerHTML = JSON.stringify(body["sensors"][0],null,2)

    const sensors = JSONtoSensor(body["sensors"][0])

    setVisible("spinner", false)
    // setVisible("recipe", true)

    // setContent("recipe-name", meal.name)   
    // setContent("recipe-area", meal.area) 
    // setContent("recipe-category", meal.category)
    // setContent("recipe-thumbnail", meal.thumbnail)

    let tagsHTML = ""
    for (const tag of sensors.tags) {
        tagsHTML += `<span class="uk-badge">${tag}</span>`
    }

    setContent("tags", tagsHTML)
})

/* CHANGE IMAGES EVERY 5s

// automatic slideshow
let slideIndex = 0

function showSlides() {
    const slides = document.getElementsByClassName("mySlides")

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slideIndex++

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block"

    setTimeout(showSlides, 5000) // change image every 5s
}

showSlides()
*/
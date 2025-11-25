
let card = document.getElementById("info-card")

let planettext = {
    sun: {
        img: "",

        surfacetemp: "5 500",
        coretemp: "15 000 000",
        age: "4.6 Billion",
        info: "The center part of the solar system. This star is the center of our solar system and drifts through out the galaxy. This celestial body gives us most of out materials and provides heat and warmth to earth. "
    },
    mercury: {
        img: "",

        surfacetemp: 430,
        coretemp: "<6 000",
        age: "4.503 Billion",
        info: "Mercury is the first planet and closest to the sun, it is the fastest planet to orbit the sun taking 88 earth days, making a year taking 88 days on mercury.  "
    },
    venus: {
        img: "",

        surfacetemp: 465,
        coretemp: "4 887",
        age: "4.503 Billion",
        info: "Venus is the second closest planet to the sun and is the hottest out of all of the solar system. "
    },
    earth: {
        img: "",

        surfacetemp: 20,
        coretemp: "4 400",
        age: "4.543 Billion",
        info: "Earth is the thrid closest and is considered to be in the 'goldilocks zone' which is the perfect condition in a solar system for a planet to have life. This is why out of all the planets in the solar system, earth is the only one with life."
    },
    mars: {
        img: "",

        surfacetemp: 20,
        coretemp: "2 000",
        age: "4.603 Billion",
        info: "Mars is the fourth closest to the sun and is the next most habitable planet besides earth. Mars is considered the red planet as it has lots of iron oxide in its soil."
    },
    jupiter: {
        img: "",

        surfacetemp: -110,
        coretemp: "20 000",
        age: "4.603 Billion",
        info: "Jupiter is the fifth closest planet to the sun and is by far the biggest planet in the entire solar system, it is also defending the earth from meteors due to its giant size. It is not made of soild material but is instead a gas giant as it is mostly composed of gases."
    },
    saturn: {
        img: "",

        surfacetemp: -140,
        coretemp: "11 700",
        age: "4.503 Billion",
        info: "Saturn is the sixth closest planet to the sun and is the only planet with visible rings. It is also made from gas just like jupiter and its rings are created from ice and rock. It has the most amount of moons out of the planets in the enitre solar system."
    },
    neptune: {
        img: "",

        surfacetemp: -214,
        coretemp: "5 100",
        age: "4.503 Billion",
        info: "Neptune is the seventh closest planet to the sun. Although they are barely visible, neptune does have rings but they are too small to be seen. It has the fastest winds in the entire solar system going up to 2400km an hour."
    },
    uranus: {
        img: "",

        surfacetemp: -195,
        coretemp: "4 700",
        age: "4.503 Billion",
        info: "Uranus is the eighth and furthest planet to the sun. Like Neptune, Uranus has tiny invisible like rings around it made from ice. Uranus is not made from rocks or soild making it not a rocky planet."
    },
}


function movecard(dir, planet) {
    if (dir == "in") {
        card.style.animationName = "moveout"
        card.style.animationDuration = "1s"
        card.style.animationTimingFunction = "both"
        card.style.right = "0%"
    }
    if (dir == "out") {
        card.style.animationName = "movein"
        card.style.animationDuration = "1s"
        card.style.animationTimingFunction = "both"
        card.style.right = "-50%"
        return
    }

    document.getElementById("card-planet").innerText = planet

    planet = planet.toLowerCase()
    document.getElementById("card-tempS").innerText = "Surface Temperature: "+planettext[planet].surfacetemp+"C"
    document.getElementById("card-tempC").innerText = "Core Temperature: "+planettext[planet].coretemp+"C"
    document.getElementById("card-age").innerText = "Age: "+planettext[planet].age+" Years"
    document.getElementById("card-info").innerText = planettext[planet].info
    document.getElementById("card-image").setAttribute("src", planet+".jpeg")
    document.getElementById("card-image").setAttribute("alt", planet)


   
}

document.getElementById("sun").addEventListener("click", () => movecard("in", "Sun"))
document.getElementById("mercury").addEventListener("click", () => movecard("in", "Mercury"))
document.getElementById("venus").addEventListener("click", () => movecard("in", "Venus"))
document.getElementById("earth").addEventListener("click", () => movecard("in", "Earth"))
document.getElementById("mars").addEventListener("click", () => movecard("in", "Mars"))
document.getElementById("jupiter").addEventListener("click", () => movecard("in", "Jupiter"))
document.getElementById("saturn").addEventListener("click", () => movecard("in", "Saturn"))
document.getElementById("neptune").addEventListener("click", () => movecard("in", "Neptune"))
document.getElementById("uranus").addEventListener("click", () => movecard("in", "Uranus"))

document.getElementById("backbutton").addEventListener("click", () => movecard("out", undefined))
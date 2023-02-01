import { geonameAPI } from "./js/geoname"
import { weatherbit } from "./js/weatherbit"
import { pixabay } from "./js/pixabay"
import "./styles/style.scss"

//Global Variables and Constants
const formElement = document.getElementById("form")
const modalTitle = document.getElementById("exampleModalLabel")
const modalBodyContainer = document.getElementById("modal-body-id")
const modalBody = document.getElementById("modal-body-id")
formElement.addEventListener("submit", async event => {
  event.preventDefault()

  let date = document.getElementById("date").value
  let countryName = document.getElementById("country").value

  // inserted inputs
  if (!date || !countryName || countryName == "") {
    modalTitle.textContent = "Oops"
    modalBody.innerHTML = `<p> Please, inser Date and Place to visit so we can provide you with the trip details.</p>`
    return
  }

  let coordenates = await geonameAPI(countryName)

  modalTitle.textContent = "Trip to " + countryName

  let forcast = await weatherbit(coordenates.postalCodes[0].lng, coordenates.postalCodes[0].lat)

  let currentDate = new Date().toISOString().slice(0, 10)
  if (currentDate > date) {
    modalBody.innerHTML = "Date expired"
    return
  }

  let found = false
  for (let i = 0; i < forcast.data.length; i++) {
    if (date == forcast.data[i].datetime) {
      modalBody.innerHTML = `<p> High: ${forcast.data[i].high_temp} <br> Low: ${forcast.data[i].low_temp} <br> Description: ${forcast.data[i].weather.description} </p>`
      found = true
    }
  }
  if (found) {
    let imageData = await pixabay(countryName)
    let placeImage = document.createElement("img")
    placeImage.setAttribute("src", imageData.hits[0].previewURL)
    modalBodyContainer.appendChild(placeImage)
  } else {
    modalBody.innerHTML = `<p> No forcast data found</p>`
  }
})

export { geonameAPI, weatherbit, pixabay }

//Current Forecast
const myAPI = "437209d363a4387bb2f5dffcea58bbee"
const myLat = "42.9106"
const myLong = "-76.802231"

const myWeather = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myAPI}&cnt=24&units=imperial`

// ========== Grab the weather data and W A I T
fetch(myWeather)
  .then((response) => response.json())
  .then((allData) => {
    forcastWeatherB(allData.list)
  }) // end waiting

//Use filter to extract an array of noon times.
function forcastWeatherA(weatherResults) {
  //console.log(weatherResults)
  //console.log(weatherResults[0].dt_txt.substring(11, 13))
  const noonTimes = weatherResults.filter(result => result.dt_txt.substring(11, 13) == '00');
  showForecast(noonTimes)
  //console.log(noonTimes)
}

//use a for each loop to find all noon times
function forcastWeatherB(weatherResults) {
  let noontimes2=[]
  weatherResults.forEach((listItem) => {
    //console.log(listItem.dt_txt)
    if (listItem.dt_txt.substring(11, 13) == '00') {
      noontimes2.push(listItem)
    }
  })
  //console.log(noontimes2)
  showForecast(noontimes2)
}

// Display three day forecast from an array
function showForecast(forcastdays) {  
  const forecast = document.querySelector('#forecast')
  forcastdays.forEach((day) => {
    //console.log(day)

    const myTemperature=document.createElement('p')
    myTemperature.className="temp"
    myTemperature.textContent = Math.floor(day.main.temp) + "°"

    const myDescription=document.createElement('p')
    myDescription.className='desc'
    myDescription.textContent = day.weather[0].description
    

    const myIcon=document.createElement('img')
    myIcon.src = `//openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
    myIcon.alt = day.weather[0].description

    const myDay=document.createElement('div')
    myDay.appendChild(myTemperature)
    myDay.appendChild(myDescription)
    myDay.appendChild(myIcon)
    forecast.appendChild(myDay)
  })
}
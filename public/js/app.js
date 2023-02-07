// Api Key : f7a60a2c5bef423690c135010221512
var flag = false;
const DefaultPlace = "Delhi";
const CheckCity = /^[A-Za-z]+$/;
function citySubmit(){
    var textField = document.getElementById('userInput');
    console.log(textField.value);
    let len= textField.value;
    let ErrorMsg = document.getElementById("ErrorMsg");
            if(textField.value.match(CheckCity) && len.length != 0){
                GetWeather(textField.value);
            }
            else{
                ErrorMsg.style.opacity = 1;
                ErrorMsg.innerHTML ="Kindly Enter Valid Place Name !";
                ErrorMsg.style.backgroundColor ="#ff5d9e";
                HideErrorMsg();
                searchCity.focus();
                searchCity.value="";
            }   
}

// Success function
function successFunction(value) {
    var lat = value.coords.latitude;
    var lon = value.coords.longitude;
    console.log(lat);
    console.log(lon);
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=bec85626bbe604b4eb861ba8b540c081`;
    fetch(url).then((resp) => resp.json())
        .then(data =>{
            console.log(data); 
            console.log('hello world')
            ShowWeather(data)
    
        })
        .catch(()=>{
            if(ErrorMsg){
                ErrorMsg.style.opacity = 1;
                ErrorMsg.style.backgroundColor ="#ff5d9e";
                ErrorMsg.innerHTML =`Invalid Response`;
                HideErrorMsg();
            }
        })
}

// Error Function
function errorFunction(err) {
    document.getElementById('latitude')
      .innerHTML = "";
    document.getElementById('longitude')
      .innerHTML = "";
    document.getElementById('error')
      .innerHTML = `Error occurred: ${err.message}`;
}
 
// Main function to get location
function getLocation() {
    navigator.geolocation
      .getCurrentPosition(
        successFunction, errorFunction
      );
}

const GetWeather =  (city) =>{
    
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bec85626bbe604b4eb861ba8b540c081`;
        //console.log(url);
    
        fetch(url).then((resp) => resp.json())
        .then(data =>{
            console.log(data); 
            ErrorMsg.style.opacity = 1;
            ErrorMsg.style.backgroundColor ="#8f71ff";
            ErrorMsg.innerHTML =`${city}'s Weather Details Show`;
            HideErrorMsg();
            console.log('hello world')
            ShowWeather(data)
    
        })
        .catch(()=>{
            if(ErrorMsg){
                ErrorMsg.style.opacity = 1;
                ErrorMsg.style.backgroundColor ="#ff5d9e";
                ErrorMsg.innerHTML =`${city} not found`;
                HideErrorMsg();
                //city.focus();
                city.value = "";
                
            }
        })
    }

const ShowWeather = (WeatherData) =>{

    let myCity = document.getElementById('cityName');
    let CurrentTime = document.getElementById('todayDate');
    let day0Icon = document.getElementById('day0Icon');
    let day0Weather = document.getElementById('day0Weather');
    let day0MaxTemp = document.getElementById('day0MaxTemp');
    let day0MinTemp = document.getElementById('day0MinTemp');
    let day0Humidity = document.getElementById('day0Humidity');
    let day0Wind = document.getElementById('day0Wind');
    let day0Pressure = document.getElementById('day0Pressure');

    //day today+1
    let day1Date = document.getElementById('day1Date');
    let day1Icon = document.getElementById('day1Icon');
    let day1Weather = document.getElementById('day1Weather');
    let day1MaxTemp = document.getElementById('day1MaxTemp');
    let day1MinTemp = document.getElementById('day1MinTemp');
    let day1Humidity = document.getElementById('day1Humidity');
    let day1Wind = document.getElementById('day1Wind');
    let day1Pressure = document.getElementById('day1Pressure');

    //today +2
    let day2Date = document.getElementById('day2Date');
    let day2Icon = document.getElementById('day2Icon');
    let day2Weather = document.getElementById('day2Weather');
    let day2MaxTemp = document.getElementById('day2MaxTemp');
    let day2MinTemp = document.getElementById('day2MinTemp');
    let day2Humidity = document.getElementById('day2Humidity');
    let day2Wind = document.getElementById('day2Wind');
    let day2Pressure = document.getElementById('day2Pressure');

    //today+3
    let day3Date = document.getElementById('day3Date');
    let day3Icon = document.getElementById('day3Icon');
    let day3Weather = document.getElementById('day3Weather');
    let day3MaxTemp = document.getElementById('day3MaxTemp');
    let day3MinTemp = document.getElementById('day3MinTemp');
    let day3Humidity = document.getElementById('day3Humidity');
    let day3Wind = document.getElementById('day3Wind');
    let day3Pressure = document.getElementById('day3Pressure');

    //today+4
    let day4Date = document.getElementById('day4Date');
    let day4Icon = document.getElementById('day4Icon');
    let day4Weather = document.getElementById('day4Weather');
    let day4MaxTemp = document.getElementById('day4MaxTemp');
    let day4MinTemp = document.getElementById('day4MinTemp');
    let day4Humidity = document.getElementById('day4Humidity');
    let day4Wind = document.getElementById('day4Wind');
    let day4Pressure = document.getElementById('day4Pressure');

    //today+5
    let day5Date = document.getElementById('day5Date');
    let day5Icon = document.getElementById('day5Icon');
    let day5Weather = document.getElementById('day5Weather');
    let day5MaxTemp = document.getElementById('day5MaxTemp');
    let day5MinTemp = document.getElementById('day5MinTemp');
    let day5Humidity = document.getElementById('day5Humidity');
    let day5Wind = document.getElementById('day5Wind');
    let day5Pressure = document.getElementById('day5Pressure');
    
    cityName.innerHTML = `${WeatherData.city.name}`; 
    day0MinTemp.innerHTML = `${Math.round(WeatherData.list[0].main.temp_min-273.15)}`;
    console.log(day0MinTemp);
    day0MaxTemp.innerHTML = `${Math.round(WeatherData.list[0].main.temp_max-273.15)}`;
    day0Icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${WeatherData.list[0].weather[0].icon}@2x.png" alt="Condition-Icon">`;
    day0Weather.innerHTML = `${WeatherData.list[0].weather[0].description}`;
    day0Humidity.innerHTML = `${WeatherData.list[0].main.humidity}`; 
    day0Wind.innerHTML = `${WeatherData.list[0].wind.speed}`;
    day0Pressure.innerHTML = `${WeatherData.list[0].main.pressure}`;
    
    day1Date.innerHTML = `${WeatherData.list[2].dt_txt}`;
    day1MinTemp.innerHTML = `${Math.round(WeatherData.list[2].main.temp_min-273.15)}`;
    day1MaxTemp.innerHTML = `${Math.round(WeatherData.list[2].main.temp_max-273.15)}`;
    day1Icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${WeatherData.list[2].weather[0].icon}@2x.png" alt="Condition-Icon">`;
    day1Weather.innerHTML = `${WeatherData.list[2].weather[0].description}`;
    day1Humidity.innerHTML = `${WeatherData.list[2].main.humidity}`; 
    day1Wind.innerHTML = `${WeatherData.list[2].wind.speed}`;
    day1Pressure.innerHTML = `${WeatherData.list[2].main.pressure}`;

    day2Date.innerHTML = `${WeatherData.list[10].dt_txt}`;
    day2MinTemp.innerHTML = `${Math.round(WeatherData.list[10].main.temp_min-273.15)}`;
    day2MaxTemp.innerHTML = `${Math.round(WeatherData.list[10].main.temp_max-273.15)}`;
    day2Icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${WeatherData.list[10].weather[0].icon}@2x.png" alt="Condition-Icon">`;
    day2Weather.innerHTML = `${WeatherData.list[10].weather[0].description}`;
    day2Humidity.innerHTML = `${WeatherData.list[10].main.humidity}`; 
    day2Wind.innerHTML = `${WeatherData.list[10].wind.speed}`;
    day2Pressure.innerHTML = `${WeatherData.list[10].main.pressure}`;

    day3Date.innerHTML = `${WeatherData.list[18].dt_txt}`;
    day3MinTemp.innerHTML = `${Math.round(WeatherData.list[18].main.temp_min-273.15)}`;
    day3MaxTemp.innerHTML = `${Math.round(WeatherData.list[18].main.temp_max-273.15)}`;
    day3Icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${WeatherData.list[18].weather[0].icon}@2x.png" alt="Condition-Icon">`;
    day3Weather.innerHTML = `${WeatherData.list[18].weather[0].description}`;
    day3Humidity.innerHTML = `${WeatherData.list[18].main.humidity}`; 
    day3Wind.innerHTML = `${WeatherData.list[18].wind.speed}`;
    day3Pressure.innerHTML = `${WeatherData.list[18].main.pressure}`;

    day4Date.innerHTML = `${WeatherData.list[26].dt_txt}`;
    day4MinTemp.innerHTML = `${Math.round(WeatherData.list[26].main.temp_min-273.15)}`;
    day4MaxTemp.innerHTML = `${Math.round(WeatherData.list[26].main.temp_max-273.15)}`;
    day4Icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${WeatherData.list[26].weather[0].icon}@2x.png" alt="Condition-Icon">`;
    day4Weather.innerHTML = `${WeatherData.list[26].weather[0].description}`;
    day4Humidity.innerHTML = `${WeatherData.list[26].main.humidity}`; 
    day4Wind.innerHTML = `${WeatherData.list[26].wind.speed}`;
    day4Pressure.innerHTML = `${WeatherData.list[26].main.pressure}`;

    day5Date.innerHTML = `${WeatherData.list[34].dt_txt}`;
    day5MinTemp.innerHTML = `${Math.round(WeatherData.list[34].main.temp_min-273.15)}`;
    day5MaxTemp.innerHTML = `${Math.round(WeatherData.list[34].main.temp_max-273.15)}`;
    day5Icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${WeatherData.list[34].weather[0].icon}@2x.png" alt="Condition-Icon">`;
    day5Weather.innerHTML = `${WeatherData.list[34].weather[0].description}`;
    day5Humidity.innerHTML = `${WeatherData.list[34].main.humidity}`; 
    day5Wind.innerHTML = `${WeatherData.list[34].wind.speed}`;
    day5Pressure.innerHTML = `${WeatherData.list[34].main.pressure}`;
};

let CurrentTime = document.getElementById('todayDate');
let SystemDate = new Date();
if(CurrentTime){
    CurrentTime.innerHTML = SystemDate.getDate()+"/"+ (SystemDate.getMonth()+1) +"/"+ SystemDate.getFullYear();
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    CurrentTime.innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
  if (i < 10) {
    i = "0" + i
}; 
  return i;
}
}


function HideErrorMsg() {
    setTimeout(() => {
        ErrorMsg.style.opacity = 0;

    }, 5000);
}
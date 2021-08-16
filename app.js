const inputText = document.querySelector('#inputText');
var button = document.querySelector('.btn');
const showData = document.querySelector('.card');

//Get API Key By Login To OpenWeather.org
const API_Key = "78aa2fa17cc71c28a19150355a6583d0";

// Now Add EVent listeners 
button.addEventListener ('click', () => {


    //Get Input Value
    const cityInput = inputText.value;
    // console.log(cityInput);

    //Now Fetch Through Get API 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=78aa2fa17cc71c28a19150355a6583d0`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.weather);
        

            //When Fill Input Field Then Clear Input Field
            inputText.value = " ";

            //Now Show All Data Value
            showData.innerHTML = `
                                <ul>
                                
                                    <div class="card-body">
                                    <h5 class="card-title">${data.name}</h5>
                                    <p class="card-text float-right"> Temp:${data.main.temp}°c &nbsp;&nbsp;&nbsp;Temp_min:${data.main.temp_min} 
                                    &nbsp;&nbsp;&nbsp;Temp_max:${data.main.temp_max}
                                    &nbsp;&nbsp;&nbsp;Pressure:${data.main.pressure}°F </p>
                                    <h6 class="card-subtitle mb-2 text-muted"> Clouds: ${data.clouds.all}  &nbsp;&nbsp; Country${data.sys.country}
                                    
                                    &nbsp;&nbsp;  sunrise:${data.sys.sunrise}&nbsp;&nbsp; Sunset:${data.sys.sunset}
                                    <h6 class="card-title"></h6>
                                    &nbsp;&nbsp;${data.wind.speed}&nbsp;&nbsp;${data.wind.deg}&nbsp;&nbsp;${data.wind.gust}
                                    <br>
                                    <br>
                            
                            
                            
                                    </h6>

                        
                                  </div>


                                </ul>
                                `; 

        });


})

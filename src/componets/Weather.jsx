import { useState, useEffect } from "react";

const URL='http://api.weatherapi.com/v1/current.json?key=16323798b61a4d1cb5a132855242901&q=London&aqi=no';

function Weather(){
    const[temp, setTemp] = useState(0)

    useEffect(() => {
        const fetchData = async() => {
            const result =await fetch(URL)
            result.json().then(json =>{
                setTemp(json.current.temp_f)
            })
            
        }
        fetchData();
    },
    []);

    return(
        <div className="Weather">
            London Temp Now: {temp}F
        </div>

    );

}
export default Weather;
import React,{useState} from "react"; 



const App = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [hemisphere, setHemisphere] = useState("");
  const [month, setMonth] = useState(""); 

  // Date object


  // console.log("hello") // useEffect

  function findLocation() {
      // 
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
              (position) =>{
                //  console.log(typeof(position.coords.latitude));
                  setLat(position.coords.latitude);
                  // console.log(lat)
                  setLong(position.coords.longitude);

                  updateHemisphere(position.coords.latitude)
              }
          );
      } 
  }

  function updateHemisphere(lat){
    if(lat > 0){
        setHemisphere("Northern Hemisphere")
    }else if(lat < 0){
        setHemisphere("Southern Hemisphere")
    }else{
        setHemisphere("Equator")
    }
  }



  return(
    <div>
          <button onClick={findLocation}>Find My Location</button>
          <h1>Latitude: {lat}</h1>
          <h1>Longitude: {long}</h1>
          {/* {
            lat &&  updateHemisphere()
          } */}
          <h1>Hemisphere: {hemisphere}</h1>
    </div>
      
  )
}

export default App;




// Northern Hemisphere: 
// March to Spetember => Summer  => souther => winter
// Jan, Feb, Oct, Nov , dec=> Winter => souther => summer
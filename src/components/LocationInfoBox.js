//click the fire icon and open a box with location information
const LocationInfoBox = ({ info }) => {

  return ( 
    <div className="location-info">
      <h2> Event Location Info</h2>
      <ul>
        <li>Type: <strong>{info.title.split("-")[0]}</strong></li>
        <li>Location: <strong> {info.title.split("-").length > 1? info.title.split("-")[1] : ""} </strong></li>

      </ul>
    </div>
   )
}
 
export default LocationInfoBox;
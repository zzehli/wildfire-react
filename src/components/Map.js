import { useState } from 'react'
import Header from './Header';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const NATURAL_EVENT_WILDFIRE = 8;
const SEVERE_STORMS = 10;

const Map = ({ eventData, center, zoom }) => {
    //location box after click
    const [locationInfo, setLocationInfo] = useState(null);
    const [infoBox, setInfoBox] = useState(true);
    const [idx, setIdx] = useState(eventData);

    
    const toggle = (index) => {
        setIdx(eventData.filter((ev) => ev.categories[0].id === index));
    }
    

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a href="#" id="Fire" onClick = {() => toggle(NATURAL_EVENT_WILDFIRE)}>Fire</a>
                <a href="#" id="Storm" onClick = {() => toggle(SEVERE_STORMS)}>Storm</a>
            </div> 
 
            <Header/>
            {/*reload this component*/}
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
                >
            {idx.map((ev, index) => {
                if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE || ev.categories[0].id === SEVERE_STORMS) {
                    return <LocationMarker key = {index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} id ={ev.categories[0].id} onClick={() => {
                        setLocationInfo({ id: ev.id, title: ev.title });
                        //support for toggle away info box
                        setInfoBox(!infoBox);
                    }} />
                }
                return null;
            })}
                </GoogleMapReact>
 
                {infoBox && 
                    <div  onClick={()=> setInfoBox(!infoBox)}>
                        {locationInfo && <LocationInfoBox info={locationInfo}/>}
                    </div>
                }
            </div>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
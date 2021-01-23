import { Icon } from '@iconify/react';
import wildFireIcon from '@iconify/icons-mdi/fire-alert';
import tornadoIcon from '@iconify/icons-mdi/weather-tornado'

const LocationMarker = ({ lat, lng, id, onClick }) => {
  const rep = () => {return id === 8? wildFireIcon: tornadoIcon}

  return ( 
    <div className = "locationMarker" onClick = { onClick }>
      <Icon icon = {rep()} className = "location-icon" />
    </div>
   );
}
 
export default LocationMarker;
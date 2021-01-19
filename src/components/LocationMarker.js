import { Icon } from '@iconify/react';
import wildFireIcon from '@iconify/icons-mdi/fire-alert';
import snowStoreIcon from '@iconify/icons-mdi/snow-advisory'

const LocationMarker = ({ lat, lng, onClick }) => {
  return ( 
    <div className = "locationMarker" onClick = { onClick }>
      <Icon icon={wildFireIcon} className = "location-icon" />
    </div>
   );
}
 
export default LocationMarker;
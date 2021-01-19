import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
  return ( 
    <header className="header">
      <div><Icon icon = {locationIcon} /> Extreme Weather Tracker (Powered By NASA)</div>
    </header>
   );
}
 
export default Header;
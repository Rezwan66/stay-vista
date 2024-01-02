import { BsFingerprint } from 'react-icons/bs';
import MenuItem from '../MenuItem';

const GuestMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />
    </>
  );
};
export default GuestMenu;

import { formatDistance } from 'date-fns';
import Button from '../Button/Button';
import Calender from './Calender';
import { useState } from 'react';
import BookingModal from '../Modal/BookingModal';

const RoomReservation = ({ room }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection',
  });
  // Price calculation: Total days * price
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
  );
  const totalPrice = totalDays * room?.price;
  const [bookingInfo, setBookingInfo] = useState({});
  // function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-bold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} />
      </div>
      <hr />
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)} label={'Reserve'} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      <BookingModal closeModal={closeModal} isOpen={isOpen} />
    </div>
  );
};
export default RoomReservation;

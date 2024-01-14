import { DateRange } from 'react-date-range';

const Calender = ({ value, handleDateChange }) => {
  // console.log(value);
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      ranges={[value]}
      onChange={handleDateChange}
      // date={value.startDate}
      direction="vertical"
      showDateDisplay={false}
      // minDate={value.startDate}
      // maxDate={value.endDate}
    />
  );
};

export default Calender;

import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Shared/Container';
// import { useEffect, useState } from 'react';
// import Loader from '../../components/Shared/Loader';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/RoomDetails/Header';
import RoomInfo from '../../components/RoomDetails/RoomInfo';
import RoomReservation from '../../components/RoomDetails/RoomReservation';

const RoomDetails = () => {
  const room = useLoaderData();
  // const { id } = useParams();
  // useEffect(() => {
  //   setLoading(true);
  //   fetch('/rooms.json') //there is a problem if we fetch dynamic data from public in react-router-dom using ./ so we used just / here
  //     .then(res => res.json())
  //     .then(data => {
  //       const singleRoom = data.find(room => room._id === id);
  //       setRoom(singleRoom);
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          <RoomInfo room={room} />
          <div className="md:col-span-3 order-first md:order-last mb-10">
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default RoomDetails;

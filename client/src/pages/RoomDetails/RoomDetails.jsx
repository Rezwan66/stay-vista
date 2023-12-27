import { useParams } from 'react-router-dom';
import Container from '../../components/Shared/Container';
import { useEffect, useState } from 'react';
import Loader from '../../components/Shared/Loader';
import { Helmet } from 'react-helmet-async';

const RoomDetails = () => {
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch('/rooms.json') //there is a problem if we fetch dynamic data from public in react-router-dom using ./ so we used just / here
      .then(res => res.json())
      .then(data => {
        const singleRoom = data.find(room => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
    </Container>
  );
};
export default RoomDetails;

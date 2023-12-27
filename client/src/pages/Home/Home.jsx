import Categories from '../../components/Categories/Categories';
import Rooms from '../../components/Rooms/Rooms';

const Home = () => {
  return (
    <div>
      {/* categories section */}
      <Categories />
      {/* rooms section */}
      <Rooms />
    </div>
  );
};

export default Home;

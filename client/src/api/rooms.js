import axiosSecure from '.';

// fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/rooms');
  //   during axiosSecure/axios get request, we can leave out the get keyword!
  return data;
};

// fetch all rooms for the signed in host
export const getHostRooms = async email => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  // we used params instead of query here because if email is undefined, then all rooms will load for that host.
  return data;
};

// fetch single room data from db
export const getRoom = async id => {
  const { data } = await axiosSecure(`/room/${id}`);
  // during axiosSecure/axios get request, we can leave out the get keyword!
  return data;
};

// Save room data in db
export const addRoom = async roomData => {
  const { data } = await axiosSecure.post('/rooms', roomData);
  return data;
};

import axiosSecure from '.';

// fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/rooms');
  //   during axiosSecure/axios get request, we can leave out the get keyword!
  return data;
};

// fetch single room data from db
export const getRoom = async id => {
  const { data } = await axiosSecure(`/room/${id}`);
  //   during axiosSecure/axios get request, we can leave out the get keyword!
  return data;
};

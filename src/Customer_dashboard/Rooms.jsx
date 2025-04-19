import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getrooms } from '../features/AllRoomsSlice';
import { getroom } from '../features/SpecificRoomSlice';
import { useNavigate } from "react-router-dom";

function Rooms() {
  const { error, loading, rooms } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getrooms());
  }, [dispatch]);

  // Function to handle room detail click
  const handleRoomDetail = (roomId) => {
    dispatch(getroom(roomId));
    navigate(`/room-details/${roomId}`);
  };

  return (
    <div className="w-[90%] mx-auto grid md:grid-cols-3 gap-6 my-10">
      {loading && <p>Loading...</p>}
      {error && <h1>Something went wrong.. Please try again</h1>} 
      {!loading && !error && rooms.filter(room => room.available).map((room, idx) => (
        <div key={idx} className="shadow-lg rounded overflow-hidden">
          <img
            src={`http://localhost:5000/uploads/${room.image}`}
            alt={room.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h3 className="text-teal-600 font-semibold text-lg mb-1">{room.name}</h3>
            <a
              onClick={() => handleRoomDetail(room._id)}
              className="text-gray-500 text-sm hover:text-teal-600 transition hover:cursor-pointer"
            >
              Check Details →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rooms;

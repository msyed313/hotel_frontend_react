import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getrooms } from '../features/AllRoomsSlice';
import { getroom } from '../features/SpecificRoomSlice';
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarIcon
} from 'lucide-react';
function Home() {
  const { error, loading, rooms } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [roomType, setRoomType] = useState();
  const [available,setAvailable] = useState();
  const [hasChecked, setHasChecked] = useState(false);
  useEffect(() => {
    dispatch(getrooms());
  }, [dispatch]);
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.",
      author: "John Smith, Businessman"
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Jane Doe, Entrepreneur"
    },
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      author: "Alice Johnson, Designer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  // Function to handle room detail click
  const handleRoomDetail = (roomId) => {
    dispatch(getroom(roomId));
    navigate(`/room-details/${roomId}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/rooms/check-availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        checkIn: checkInDate,
        checkOut: checkOutDate,
        roomType: roomType
      }),
    });

    const data = await res.json();
    setHasChecked(true);
    setAvailable(data.available); // shows available rooms or message
  };

  return (
    <div>
      {/* Check Availability */}
      <div className="bg-gray-100 w-[90%] mx-auto mt-10 p-6">
        <h2 className="text-center text-teal-600 text-xl font-semibold mb-6 tracking-widest">CHECK AVAILABILITY</h2>

        <form className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between max-w-4xl mx-auto items-center">
          <div className="mb-4">
            <label className="flex items-center gap-2"><CalendarIcon size={16} /> Check In</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                setCalendarView(date);
              }}
              className="mt-1 block w-full p-2 rounded bg-white text-black"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2"><CalendarIcon size={16} /> Check Out</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
                setCalendarView(date);
              }}
              className="mt-1 block w-full p-2 rounded bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">Room Type</label>
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className=" mt-1 block w-full p-2 rounded bg-white text-black ">
             <option>Select Comfort Level</option>
              <option>Basic</option>
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Superior</option>
              <option>Premium</option>
              <option>Family Special</option>
            </select>
          </div>

          <div className="flex items-end">
            <button onClick={handleSubmit} type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition w-full">
              Check Availability
            </button>
          </div>
        </form>
        {hasChecked && (available ?(
          <div className="mt-4 text-center text-green-600 font-semibold">
            {roomType} Rooms are available for the selected dates!
          </div>
        ): (
          <div className="mt-4 text-center text-red-600 font-semibold">
            {roomType} rooms are not available for the selected dates.
          </div>
        ))}
      </div>

      {/* Room Cards */}
      <div className="py-10 px-4 md:px-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-2">OUR APARTMENTS</h2>
        <a href="/rooms" className="text-sm text-teal-500 hover:underline">View All Rooms →</a>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {loading && <p>Loading...</p>}
          {error && <h1>Something went wrong.. Please try again</h1>}
          {!loading && !error && rooms.filter(room => room.available).slice(0, 3).map((room, idx) => (
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
      </div>

      {/* Testimonials */}
      <div className="relative w-[90%] mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold text-center text-teal-500 mb-4">TESTIMONIAL</h2>
        <p className="text-gray-700 text-center mb-4">{testimonials[currentIndex].text}</p>
        <p className="text-gray-500 text-center mb-6">{testimonials[currentIndex].author}</p>

        <div className="flex absolute right-5 top-5 gap-2">
          <button onClick={handlePrev} className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <button onClick={handleNext} className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getroom } from '../features/SpecificRoomSlice';
// import { bookRoom } from '../features/BookRoomSlice';
import { useNavigate } from "react-router-dom";

function RoomDetailComponent() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { room, loading, error } = useSelector((state) => state.room);
    const { bookedRoom, loading: bookingLoading, error: bookingError } = useSelector((state) => state.bookroom);

    // console.log(room);
    useEffect(() => {
        dispatch(getroom(id));
    }, [dispatch, id]);
    const handleBook = () => {
        navigate(`/booking`);
    };
    return (
        <div class="max-w-6xl mx-auto p-6">
            {loading && <p>Loading...</p>}
            {error && <h1>Something went wrong.. Please try again</h1>}
            {!loading && !error &&
                <div class="grid md:grid-cols-2 gap-6 items-center">

                    <div>
                        <img src={`http://localhost:5000/uploads/${room.image}`} alt="Room Image" class="w-full h-auto rounded-lg shadow-md" />
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-teal-600 mb-4">{room.name}</h2>

                        <ul class="space-y-3 text-gray-700">
                            <li><strong class="text-teal-500">Price:</strong> Rs {room.price} / night</li>
                            <li><strong class="text-teal-500">Total Beds:</strong> {room.totalBeds}</li>
                            <li><strong class="text-teal-500">Internet:</strong> {room.internet ? "Available" : "Not Available"}</li>
                            <li><strong class="text-teal-500">Comfort Level:</strong> {room.comfortLevel}</li>
                            <li><strong class="text-teal-500">Size:</strong> {room.size}</li>
                            <li><strong class="text-teal-500">View:</strong> {room.view}</li>
                        </ul>

                        <button onClick={handleBook} class="mt-6 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
                            Book Now
                        </button>
                    </div>

                </div>
            }
            {/* {bookingLoading && <p className="text-blue-500">Booking your room...</p>}
            {bookedRoom && <p className="text-green-600">Room booked successfully!</p>}
            {bookingError && <p className="text-red-500">{bookingError}</p>} */}
        </div>

    )
}

export default RoomDetailComponent
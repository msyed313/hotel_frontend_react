import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    CalendarIcon,
    UserIcon,
    BedDoubleIcon,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { useSelector, useDispatch } from "react-redux";
import { getrooms } from '../features/AllRoomsSlice';
import { createBooking } from '../features/BookRoomSlice';
function Booking() {
    const [roomType, setRoomType] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [trooms, setTRooms] = useState();
    const [adults, setAdults] = useState();
    const [children, setChildren] = useState();
    const [step, setStep] = useState(1);
    const [calendarView, setCalendarView] = useState(new Date());
    const { error, loading, rooms } = useSelector((state) => state.rooms);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        roomType: roomType,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        totalRooms: trooms,
        adults: adults,
        children: children,
    });
    useEffect(() => {
        setFormData({
            roomType,
            checkIn: checkInDate.toISOString().split('T')[0],
            checkOut: checkOutDate.toISOString().split('T')[0],
            totalRooms: trooms,
            adults,
            children,
        });
    }, [roomType, checkInDate, checkOutDate, trooms, adults, children]);

    useEffect(() => {
        dispatch(getrooms());
    }, [dispatch]);
    const goNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const goBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleConfirm = async () => {
        console.log('Booking Details:', formData);
        try {
            await dispatch(createBooking(formData)).unwrap(); // Use unwrap to catch errors
            alert('Reservation Confirmed!');
        } catch (error) {
            alert(`Booking failed: ${error.message}`);
        }
    };


    const renderCalendar = (selectedDate, setSelectedDate, label) => {
        const currentMonth = new Date(calendarView.getFullYear(), calendarView.getMonth(), 1);
        const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
        const startDay = currentMonth.getDay();

        return (
            <div className="bg-white border rounded shadow-md p-4">
                <div className="flex justify-between items-center mb-2">
                    <button onClick={() => setCalendarView(new Date(calendarView.setMonth(calendarView.getMonth() - 1)))}>
                        <ChevronLeft />
                    </button>
                    <h4 className="text-lg font-semibold">
                        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h4>
                    <button onClick={() => setCalendarView(new Date(calendarView.setMonth(calendarView.getMonth() + 1)))}>
                        <ChevronRight />
                    </button>
                </div>

                <p className="font-semibold text-sm mb-2">{label}</p>
                <div className="grid grid-cols-7 gap-2 text-center font-medium">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-gray-600">{day}</div>
                    ))}

                    {[...Array(startDay)].map((_, i) => (
                        <div key={`empty-${i}`}></div>
                    ))}

                    {[...Array(daysInMonth)].map((_, i) => {
                        const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
                        const isSelected = selectedDate.toDateString() === dayDate.toDateString();

                        return (
                            <div
                                key={i}
                                className={`p-2 rounded cursor-pointer hover:bg-green-100 ${isSelected ? 'bg-green-600 text-white font-bold' : ''
                                    }`}
                                onClick={() => setSelectedDate(dayDate)}
                            >
                                {i + 1}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col md:flex-row justify-between p-4 gap-4">
            {/* Left Section */}
            <div className="bg-green-600 text-white p-4 w-full md:w-1/3 rounded shadow-md">
                <h3 className="text-lg font-bold mb-4">Your Reservation</h3>

                {/* Step 1: Date Selection */}
                {step === 1 && (
                    <>
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

                    </>
                )}

                {/* Step 2: Room Selection */}
                {step === 2 && (
                    <>
                        <div className="mb-4">
                            <label>Room Type</label>
                            <select
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                className="mt-1 block w-full p-2 rounded bg-white text-black"
                            >
                                <option value="">Select a room type</option>
                                {rooms.filter(room=>room.available).map((room, index) => (
                                    <option key={index} value={room.comfortLevel}>
                                        {room.comfortLevel}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="flex items-center gap-2"><BedDoubleIcon size={16} /> Rooms</label>
                            <select
                                value={trooms}
                                onChange={(e) => setTRooms(Number(e.target.value))}
                                className="mt-1 block w-full p-2 rounded bg-white text-black"
                            >
                                {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center gap-2"><UserIcon size={16} /> Adults</label>
                            <select
                                value={adults}
                                onChange={(e) => setAdults(Number(e.target.value))}
                                className="mt-1 block w-full p-2 rounded bg-white text-black"
                            >
                                {[1, 2, 3, 4, 5].map(a => <option key={a} value={a}>{a}</option>)}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label>Children</label>
                            <select
                                value={children}
                                onChange={(e) => setChildren(Number(e.target.value))}
                                className="mt-1 block w-full p-2 rounded bg-white text-black"
                            >
                                {[0, 1, 2, 3].map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </>
                )}

                {/* Step 3: Review */}
                {step === 3 && (
                    <div className="text-sm">
                        <p><strong>Check-In:</strong> {checkInDate.toDateString()}</p>
                        <p><strong>Check-Out:</strong> {checkOutDate.toDateString()}</p>
                        <p><strong>Rooms:</strong> {trooms}</p>
                        <p><strong>Adults:</strong> {adults}</p>
                        <p><strong>Children:</strong> {children}</p>
                    </div>
                )}

                {/* Step 4: Confirmation */}
                {step === 4 && (
                    <div className="text-center">
                        <h4 className="text-xl font-semibold mb-2">Reservation Confirmed!</h4>
                        <p className="text-sm">We’ve saved your booking details. A confirmation email will be sent shortly.</p>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-2 mt-6">
                    {step > 1 && (
                        <button
                            className="w-full bg-white text-green-600 rounded p-2 hover:bg-gray-100 transition"
                            onClick={goBack}
                        >
                            Back
                        </button>
                    )}
                    {step < 4 ? (
                        <button
                            className="w-full bg-white text-green-600 rounded p-2 hover:bg-gray-100 transition"
                            onClick={goNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="w-full bg-white text-green-600 rounded p-2 hover:bg-gray-100 transition"
                            onClick={handleConfirm}
                        >
                            Done
                        </button>
                    )}
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col w-full md:w-2/3 gap-4">
                {/* Step Tracker */}
                <div className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-md">
                    {[1, 2, 3, 4].map((s) => (
                        <span
                            key={s}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition ${step >= s
                                ? 'bg-green-600 text-white'
                                : 'bg-white border border-gray-300 text-gray-600'
                                }`}
                        >
                            {s === 1 && '1. Choose Date'}
                            {s === 2 && '2. Choose Room'}
                            {s === 3 && '3. Review'}
                            {s === 4 && '4. Confirm'}
                        </span>
                    ))}
                </div>

                {/* Calendar (Step 1) */}
                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {renderCalendar(checkInDate, setCheckInDate, 'Check-In Date')}
                        {renderCalendar(checkOutDate, setCheckOutDate, 'Check-Out Date')}
                    </div>
                )}
                {/* Room (Step 2) */}
                {step === 2 && (
                    <div className="w-full">
                        {rooms && roomType && (() => {
                            const selectedRoom = rooms.find(room => room.comfortLevel === roomType);
                            return selectedRoom ? (
                                <img
                                    src={`http://localhost:5000/uploads/${selectedRoom.image}`}
                                    alt={selectedRoom.comfortLevel}
                                    className="w-full h-96 object-cover rounded shadow-md"
                                />
                            ) : null;
                        })()}
                    </div>
                )}


                {/* Review (Step 3) */}
                {step === 3 && (
                    <div className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Your Reservation Summary</h3>
                        {rooms && roomType && (() => {
                            const selectedRoom = rooms.find(room => room.comfortLevel === roomType);
                            return selectedRoom ? (
                                <img
                                    src={`http://localhost:5000/uploads/${selectedRoom.image}`}
                                    alt={selectedRoom.comfortLevel}
                                    className="w-full h-96 object-cover rounded shadow-md"
                                />
                            ) : null;
                        })()}
                        <ul className="text-sm space-y-1">
                            <li><strong>Room Type:</strong> {roomType}</li>
                            <li><strong>Check-In:</strong> {checkInDate.toDateString()}</li>
                            <li><strong>Check-Out:</strong> {checkOutDate.toDateString()}</li>
                            <li><strong>Rooms:</strong> {trooms}</li>
                            <li><strong>Adults:</strong> {adults}</li>
                            <li><strong>Children:</strong> {children}</li>
                        </ul>
                    </div>
                )}
                {/* Review (Step 3) */}
                {step === 4 && (
                    <div className="bg-white p-4 rounded shadow-md text-center">
                        <img
                            src="/assets/thank-you.jpg"
                            alt="confirmation"
                            className="w-full h-64 object-cover rounded mb-3"
                        />
                        <h3 className="text-lg font-semibold">We're preparing your room!</h3>
                        <p className="text-sm text-gray-500 mt-2">A confirmation email has been sent to your inbox.</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Booking;

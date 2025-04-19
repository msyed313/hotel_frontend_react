import { configureStore } from "@reduxjs/toolkit";
import RoomsReducer from "../features/AllRoomsSlice";
import RoomReducer from "../features/SpecificRoomSlice";
import BookRoomReducer from "../features/BookRoomSlice";
import { Book } from "lucide-react";
 const  store = configureStore({
  reducer: {
    rooms: RoomsReducer,
    room: RoomReducer,
    bookroom: BookRoomReducer,
  },
});
export default store;
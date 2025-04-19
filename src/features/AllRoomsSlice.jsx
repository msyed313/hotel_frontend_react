import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const url ="http://localhost:5000/api/rooms/"

export const getrooms = createAsyncThunk(
  "getroomsData",
  async (args, { rejectWithValue }) => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(args);
    
    try {
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Rooms = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    loading: false,
    error: null
  },

  extraReducers: (builder) => {
    builder
      .addCase(getrooms.pending,(state)=>{
        state.loading=true
      })
      .addCase(getrooms.fulfilled,(state,action)=>{
        state.loading=false
        state.rooms=action.payload
      })
      .addCase(getrooms.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
      })
  }

});

export default Rooms.reducer
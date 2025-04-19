import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getroom = createAsyncThunk(
  "getroomData",
  async (roomId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:5000/api/rooms/${roomId}`);
    const data = await response.json();
    //console.log(args);
    
    try {
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Room = createSlice({
  name: "room",
  initialState: {
    room: [],
    loading: false,
    error: null
  },

  extraReducers: (builder) => {
    builder
      .addCase(getroom.pending,(state)=>{
        state.loading=true
      })
      .addCase(getroom.fulfilled,(state,action)=>{
        state.loading=false
        state.room=action.payload
      })
      .addCase(getroom.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
      })
  }

});

export default Room.reducer
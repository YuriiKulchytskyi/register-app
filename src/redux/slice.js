import { createSlice } from "@reduxjs/toolkit";
import {
  addEvent,
  addParticipantToEvent,
  deleteEventById,
  getAllEvents,
  getEventById,
  getParticipantsByEventId,
} from "./operations";

const initialState = {
  events: [],
  isLoading: false,
  error: null,
  participants: [],
  event: null,
};

const eventSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(getEventById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.event = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteEventById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEventById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteEventById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = state.events.filter(
          (event) => event._id !== action.payload.id
        );
      })
      .addCase(addEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = [...state.events, action.payload];
      })
      .addCase(addParticipantToEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addParticipantToEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedEvent = action.payload;

        const eventIndex = state.events.findIndex(
          (event) => event._id === updatedEvent._id // Порівнюємо за _id
        );

        if (eventIndex >= 0) {
          state.events[eventIndex] = updatedEvent;
        }
      })
      .addCase(addParticipantToEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getParticipantsByEventId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getParticipantsByEventId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getParticipantsByEventId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.participants = action.payload;
      });
  },
});

export const sliceReducer = eventSlice.reducer;

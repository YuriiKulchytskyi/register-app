import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://event-register-backend.onrender.com/api/events";

export const getAllEvents = createAsyncThunk(
  "slice/getAllEvents",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getEventById = createAsyncThunk(
  'slice/getEventById', 
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`/${_id}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteEventById = createAsyncThunk(
  'slice/deleteEventById',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/${_id}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addEvent = createAsyncThunk(
  'slice/addEvent',
  async (eventData, thunkAPI) => {
    try {
      const response = await axios.post('/', eventData)
      return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addParticipantToEvent = createAsyncThunk(
  "slice/addParticipantToEvent",
  async ({ _id, participantData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/${_id}/participants`,
        participantData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getParticipantsByEventId = createAsyncThunk(
  "slice/getParticipantsByEventId",
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`/${_id}/participants`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);
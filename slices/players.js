import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  players: [],
};

// A slice for players with our three reducers
const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    getPlayers: (state) => {
      state.loading = true;
    },
    getPlayersSuccess: (state, { payload }) => {
      state.players = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPlayersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getPlayers, getPlayersSuccess, getPlayersFailure } =
  playersSlice.actions;

// A selector
export const playersSelector = (state) => state.players;

export default playersSlice.reducer;

// Asynchronous thunk action
export function fetchPlayers() {
  return async (dispatch) => {
    dispatch(getPlayers());

    try {
      const query = await fetch(`https://api.starcks.uat.orimos.dev/players`);
      const response = await query.json();

      dispatch(getPlayersSuccess(response));
    } catch (error) {
      dispatch(getPlayersFailure());
    }
  };
}

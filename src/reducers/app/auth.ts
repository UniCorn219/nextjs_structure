import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  id: number | null;
  email: string | null;
};

const initialState: State = {
  id: null,
  email: null,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    update: (_, action: PayloadAction<State>) => {
      return action.payload;
    },
  },
});

export { reducer };
export default actions;

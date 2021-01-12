import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  errorCode: number | null;
};

const initialState: State = {
  errorCode: null,
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetErrorCode: (state) => {
      state.errorCode = null;
    },
    setErrorCode: (state, action: PayloadAction<number>) => {
      state.errorCode = action.payload;
    },
  },
});

export { reducer };
export default actions;

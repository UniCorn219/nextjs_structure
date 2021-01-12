import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  isNotice: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  description?: string;
};

const initialState: State = {
  isNotice: false,
};

type OnNotification = {
  type?: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
};

const { actions, reducer } = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    onNotification: (_, action: PayloadAction<OnNotification>) => {
      return { isNotice: true, ...action.payload };
    },
    offNotification: () => {
      return { isNotice: false };
    },
  },
});

export { reducer };
export default actions;

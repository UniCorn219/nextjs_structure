import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual, isEmpty, merge } from 'lodash';

export type UserEntity = {
  id: number;
  email: string;
  family_name: string;
  given_name: string;
  family_name_kana: string;
  given_name_kana: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
};

export type UserNormalizedEntity = {
  [x: string]: UserEntity;
};

type State = {
  entities: UserNormalizedEntity | null;
};

const initialState: State = {
  entities: null,
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateEntities: (state, action: PayloadAction<UserNormalizedEntity>) => {
      const payload = isEmpty(action.payload) ? null : action.payload;

      if (isEqual(state.entities, payload)) return;
      state.entities = merge({}, state.entities, payload);
    },
  },
});

export { reducer };
export default actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual, reverse, takeRight, uniqWith } from 'lodash';
import { IGroup } from '../../types/IGroup';
import { RootState } from '../store';

interface GroupState {
  activeGroup: IGroup | undefined;
  recentGroups: IGroup[];
}

const initialState: GroupState = {
  activeGroup: undefined,
  recentGroups: [], //,sampleSize(groupMock, 5),
};

export const appSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setActiveGroup: (state, action: PayloadAction<IGroup | undefined>) => {
      state.activeGroup = action.payload;
    },
    setRecentGroup: (state, action: PayloadAction<IGroup>) => {
      const recentGroups = reverse(
        uniqWith([action.payload, ...state.recentGroups], isEqual),
      ) as IGroup[];
      state.recentGroups = takeRight(recentGroups, 4);
    },
    resetGroupStore: (state) => {
      state.activeGroup = undefined;
      state.recentGroups = [];
    },
  },
});

export const { setActiveGroup, setRecentGroup, resetGroupStore } =
  appSlice.actions;

export const getActiveGroup = (state: RootState) => state.group.activeGroup;
export const getRecentGroups = (state: RootState) =>
  reverse([...state.group.recentGroups]);

export default appSlice.reducer;

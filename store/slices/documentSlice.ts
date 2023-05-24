import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDocument } from '../../types/IDocument';
import { RootState } from '../store';
import { filter, reverse, takeRight } from 'lodash';

interface DocumentsState {
  uploadedDocuments: IDocument[];
  submissionDocument: IDocument;
}

const initialState: DocumentsState = {
  uploadedDocuments: [],
  submissionDocument: {} as IDocument,
};

export const appSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    saveDocument: (state, action: PayloadAction<IDocument>) => {
      state.uploadedDocuments = [...state.uploadedDocuments, action.payload];
    },
    setSubmissionDoc: (state, action: PayloadAction<IDocument>) => {
      state.submissionDocument = action.payload;
    },
  },
});

export const { saveDocument, setSubmissionDoc } = appSlice.actions;

export const getUploadedDocuments = (state: RootState) => {
  return reverse(
    takeRight(
      filter([...state.document.uploadedDocuments], {
        groupId: state.group.activeGroup?.id!,
      }),
      4,
    ),
  );
};

export const getSubmissionDoc = (state: RootState) =>
  state.document.submissionDocument;

export default appSlice.reducer;

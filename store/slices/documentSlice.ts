import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDocument } from '../../types/IDocument';
import { RootState } from '../store';
import { takeRight } from 'lodash';

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
      const recentDocs = takeRight(state.uploadedDocuments, 4);
      state.uploadedDocuments = [...recentDocs, action.payload];
    },
    setSubmissionDoc: (state, action: PayloadAction<IDocument>) => {
      state.submissionDocument = action.payload;
    },
  },
});

export const { saveDocument, setSubmissionDoc } = appSlice.actions;

export const getUploadedDocuments = (state: RootState) =>
  state.document.uploadedDocuments;

export const getSubmissionDoc = (state: RootState) =>
  state.document.submissionDocument;

export default appSlice.reducer;

import * as types from './types';
import { INotesList } from '../interfaces';
import { Value } from 'slate';

export const updateUserAction = (
  user: firebase.User | null
): types.ActionTypes => ({
  type: types.UPDATE_USER,
  user,
});

export const updateUserNotesAction = (
  notesList: INotesList
): types.ActionTypes => ({
  type: types.STORE_NOTES_LIST,
  notesList,
});

export const addNewNoteAction = (noteId: string): types.ActionTypes => ({
  type: types.ADD_NEW_NOTE,
  noteId,
});

export const deleteNoteAction = (
  noteId: string,
  lastModified: number,
  active: boolean
): types.ActionTypes => ({
  type: types.DELETE_NOTE,
  noteId,
  lastModified,
  active,
});

export const setNoteActiveAction = (noteId: string): types.ActionTypes => ({
  type: types.SET_NOTE_ACTIVE,
  noteId,
});

export const setActiveNoteValueAction = (
  activeNoteId: string,
  value: Value,
  updateLastModified: boolean,
  preview: string
): types.ActionTypes => ({
  type: types.SET_ACTIVE_NOTE_VALUE,
  activeNoteId,
  value,
  updateLastModified,
  preview,
});

export const setNoteTitleAction = (
  activeNoteId: string,
  title: string
): types.ActionTypes => ({
  type: types.SET_NOTE_TITLE,
  activeNoteId,
  title,
});

export const removeAllNotesAction = (): types.ActionTypes => ({
  type: types.REMOVE_ALL_NOTES,
});

export const updateSyncedStatusAction = (
  synced: boolean
): types.ActionTypes => ({
  type: types.UPDATE_SYNCED_STATUS,
  synced,
});

export const firestoreChangeDetectedAction = (
  doc: firebase.firestore.DocumentSnapshot,
  user: firebase.User
): types.ActionTypes => ({
  type: types.FIRESTORE_CHANGE_DETECTED,
  doc,
  user,
});

export const firebaseSignInAction = (): types.ActionTypes => ({
  type: types.FIREBASE_SIGNIN,
});

export const firebaseSignOutAction = (): types.ActionTypes => ({
  type: types.FIREBASE_SIGNOUT,
});

export const firebaseAuthStateChangedAction = (
  user: firebase.User | null
): types.ActionTypes => ({
  type: types.FIREBASE_AUTH_STATE_CHANGED,
  user,
});

import { createSelector } from '@ngrx/store';
import { AppStateInterface } from './appStateInterface';

const selectFeature = (state: AppStateInterface) => state.users;

export const userSelector = createSelector(
  selectFeature,
  (state) => state.users
);


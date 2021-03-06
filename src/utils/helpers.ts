import {moviesTags} from './constants';

export const filterGenresById = (gernresIds: Array<number>) => {
  const results = moviesTags.filter(o1 => {
    return gernresIds.some(o2 => {
      return o1.id === o2;
    });
  });
  return results;
};

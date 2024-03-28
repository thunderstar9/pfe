import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 19191,
  title: 'neat unimpressively',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-25T23:24'),
};

export const sampleWithPartialData: IPost = {
  id: 28790,
  title: 'oof',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-26T14:00'),
};

export const sampleWithFullData: IPost = {
  id: 1959,
  title: 'rout yearly',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-25T19:46'),
};

export const sampleWithNewData: NewPost = {
  title: 'flimsy',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-25T17:24'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

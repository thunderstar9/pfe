import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 3456,
  name: 'utilized disgusting lest',
};

export const sampleWithPartialData: ITag = {
  id: 18833,
  name: 'underneath natural unsteady',
};

export const sampleWithFullData: ITag = {
  id: 20725,
  name: 'rat',
};

export const sampleWithNewData: NewTag = {
  name: 'from reading',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 18002,
  name: 'wallaby',
  handle: 'triumphantly under',
};

export const sampleWithPartialData: IBlog = {
  id: 28001,
  name: 'by riffle artistic',
  handle: 'vibrant whether but',
};

export const sampleWithFullData: IBlog = {
  id: 19902,
  name: 'among',
  handle: 'made-up whereas',
};

export const sampleWithNewData: NewBlog = {
  name: 'ick trapezoid beyond',
  handle: 'semicircle foolishly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

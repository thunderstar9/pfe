import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '5dfc9970-c6cd-47ff-b136-fae9919d9b87',
};

export const sampleWithPartialData: IAuthority = {
  name: '7a0e79c2-a513-4ad4-9d8e-a2596be3d8ab',
};

export const sampleWithFullData: IAuthority = {
  name: 'd9233584-67d6-434e-a1ff-8c7dd96ec1bc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

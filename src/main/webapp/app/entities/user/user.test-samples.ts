import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11833,
  login: 'YUi@j\\Uz6b\\jNWt9i\\XO7ww\\}cH',
};

export const sampleWithPartialData: IUser = {
  id: 17954,
  login: 'DogG',
};

export const sampleWithFullData: IUser = {
  id: 5406,
  login: 'k9l@HQSIt\\EG4\\MLcEa',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

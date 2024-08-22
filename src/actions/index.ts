import { getAvailabilityById } from './places/get-availability-by-id.action';
import { getPlaces } from './places/get-places.action';

export const server = {
  getPlaces,
  getAvailabilityById,
};

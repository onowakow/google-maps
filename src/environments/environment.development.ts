import { Environment } from './environment.model';
export const environment: Environment = {
  PRODUCTION: false,

  // Google Maps Key is protected by whitelisting IP address.
  GOOGLE_MAPS_API_KEY: 'AIzaSyDdjinbJafmTqCyTxy2hqy425L58xBKke8',
  GOOGLE_MAPS_API_BASE_URL:
    'https://maps.googleapis.com/maps/api/directions/json',
};

import type { Coordinates } from './Coordinates.interface';

interface Location {
  name: string;
  coordinates: Coordinates | null;
}

export type { Location };

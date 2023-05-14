import type { Coordinates } from './Coordinates.interface';

interface Location {
  province: string;
  coordinates: Coordinates | null;
}

export type { Location };

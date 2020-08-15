export interface CountryStats {
  country?: string;
  county?: string;
  province?: string;
  updatedAt?: string;
  stats?: Stats;
  coordinates?: CountryCoordinates;
}

export interface Stats
{
  confirmed?: number;
  deaths?: number;
  recovered?: number;
}

export interface CountryCoordinates
{
  latitude?: string;
  longitude?: string;
}

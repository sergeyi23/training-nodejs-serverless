import fs from 'fs';

import { v4 } from 'uuid';

import { PlanetEntity } from '../entities/PlanetEntity';

function readPlanetsFromFile(): PlanetEntity[] {
  const planetsText = fs.readFileSync(
    './src/core/db/repositories/planets.json',
    'utf-8'
  );
  return JSON.parse(planetsText) as PlanetEntity[];
}

function writePlanetsToFile(planets: PlanetEntity[]) {
  fs.writeFileSync(
    './src/core/db/repositories/planets.json',
    JSON.stringify(planets),
    'utf-8'
  );
}

export function getAllPlanets(): PlanetEntity[] {
  return readPlanetsFromFile();
}

export function createPlanetInDb(name: string, habitable: boolean): any {
  const planets = readPlanetsFromFile();
  planets.push(new PlanetEntity(v4(), name, habitable, Date.now()));
  writePlanetsToFile(planets);
  return planets[planets.length - 1];
}

export function getPlanetByIdInDb(id: string): PlanetEntity | undefined {
  const planets = readPlanetsFromFile();
  return planets.find((planet) => planet.id === id);
}

export function deletePlanetInDb(id: string): {} {
  const planets = readPlanetsFromFile();
  writePlanetsToFile(planets.filter((planet) => planet.id !== id));
  return {};
}

export function updatePlanetByIdInDb(
  id: string,
  name: string,
  habitable: boolean
): PlanetEntity | undefined {
  const planets = readPlanetsFromFile();
  const updatedPlanet = { name, habitable };
  const updatedPlanets = planets.map((planet) => {
    return planet.id === id ? { ...planet, ...updatedPlanet } : planet;
  });
  writePlanetsToFile(updatedPlanets);
  return updatedPlanets.find((planet) => planet.id === id);
}

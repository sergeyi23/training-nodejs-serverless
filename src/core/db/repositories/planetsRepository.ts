import fs from 'fs';

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

export function createPlanetInDb(
  id: number,
  name: string,
  active: boolean = true
): any {
  const planets = readPlanetsFromFile();
  planets.push(new PlanetEntity(id, name, active, Date.now()));
  writePlanetsToFile(planets);
  return planets[planets.length - 1];
}

export function getPlanetIdInDb(id: number): PlanetEntity | undefined {
  const planets = readPlanetsFromFile();
  return planets.find((planet) => planet.id === id);
}

export function deletePlanetInDb(id: number): {} {
  const planets = readPlanetsFromFile();
  writePlanetsToFile(planets.filter((planet) => planet.id !== id));
  return {};
}

export function updatePlanetIdInDb(
  id: number,
  name: string,
  active: boolean
): PlanetEntity | undefined {
  const planets = readPlanetsFromFile();
  const updatePlanet = { name, active };
  const updatePlanets = planets.map((planet) => {
    if (planet.id === id) {
      return { ...planet, ...updatePlanet };
    }
    return planet;
  });
  writePlanetsToFile(updatePlanets);
  return updatePlanets.find((planet) => planet.id === id);
}

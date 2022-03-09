import fs from 'fs';

import { PlanetEntity } from '../entities/PlanetEntity';

function readPlanetsFromFile(): PlanetEntity[] {
  const planetsText = fs.readFileSync(
    './src/core/db/repositories/planets.json',
    'utf-8'
  );
  console.log(planetsText);
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
  const planets = readPlanetsFromFile();
  console.log(JSON.stringify(planets));
  return planets;
}

export function getPlanetByID(PlanetId: number): PlanetEntity {
  const planets = readPlanetsFromFile();
  const planet =
    planets.find(({ id }) => id == PlanetId) ||
    new PlanetEntity(11, 'Nan', false, Date.now());
  return planet;
}

export function deletePlanetInDb(PlanetId: number): PlanetEntity[] {
  const planets = readPlanetsFromFile();
  const newPlanets = planets.filter((planet) => planet.id != PlanetId);
  writePlanetsToFile(newPlanets);
  return newPlanets;
}

export function updatePlanetInDb(
  id: number,
  name: string,
  active: boolean
): PlanetEntity[] {
  const planets = readPlanetsFromFile();
  const updatePlanets = planets.map((planet) => {
    if (planet.id == id) {
      planet.name = name;
      planet.active = active;
    }
    return planet;
  });
  writePlanetsToFile(updatePlanets);
  return updatePlanets;
}

export function createPlanetInDb(
  id: number,
  name: string,
  active: boolean
): any {
  const planets = readPlanetsFromFile();
  planets.push(new PlanetEntity(id, name, active, Date.now()));
  writePlanetsToFile(planets);
  return planets[planets.length - 1];
}

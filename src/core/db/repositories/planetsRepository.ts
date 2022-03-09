import fs from "fs";
import { PlanetEntity } from "../entities/PlanetEntity";

const uuid = require('uuid');

function readPlanetsFromFile(): PlanetEntity[] {
  const planetText = fs.readFileSync(
    './src/core/db/repositories/planets.json',
    'utf-8'
  );
  return JSON.parse(planetText) as PlanetEntity[];
}

function writePlanetsToFile(planets: PlanetEntity[]) {
  fs.writeFileSync(
    './src/core/db/repositories/planets.json',
    JSON.stringify(planets, null, '\t'),
    'utf-8'
  );
}

export function getAllPlanets(): PlanetEntity[] {
  return readPlanetsFromFile();
}

export function getPlanetById(id: string): any {
  const planets = readPlanetsFromFile();
  const planet = planets.findIndex(planet => planet.id == id);
  if (planet === -1)
    return null;
  return planets[planet];
}

export function updatePlanetInDb(id: string, name: string, diameter: number): any {
  const planets = readPlanetsFromFile();
  const planet = planets.findIndex(planet => planet.id == id);
  if (planet === -1)
    return null;
  // @ts-ignore
  planets[planet].name = name;
  // @ts-ignore
  planets[planet].diameter = diameter;
  // @ts-ignore
  planets[planet].createTimestamp = Date.now();
  writePlanetsToFile(planets);
  return planets[planet];
}

export function deletePlanetById(id: string): any {
  const planets = readPlanetsFromFile();
  const index = planets.findIndex(planet => planet.id == id);
  const removedPlanet = planets[index];
  if (index === -1)
    return null;
  planets.splice(index, 1);
  writePlanetsToFile(planets);
  return removedPlanet;
}

export function createPlanetInDb(name: string, diameter: number): any {
  const planets = readPlanetsFromFile();
  planets.push(new PlanetEntity(uuid.v4(), name, diameter, Date.now()));
  writePlanetsToFile(planets);
  return planets[planets.length - 1];
}

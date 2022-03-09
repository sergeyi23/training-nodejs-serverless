import fs from 'fs';
// import { Person } from 'src/model/Person';

import { PlanetEntity } from '../entities/PlanetEntity';

function readPlanetsFromFile(): PlanetEntity[] {
  const peopleText = fs.readFileSync(
    './src/core/db/repositories/planets.json',
    'utf-8'
  );
  console.log(peopleText);
  return JSON.parse(peopleText) as PlanetEntity[];
}

function writePlanetsToFile(planets: PlanetEntity[]) {
  fs.writeFileSync(
    './src/core/db/repositories/planets.json',
    JSON.stringify(planets, null, 2),
    'utf-8'
  );
}

export function getAllPlanets(): PlanetEntity[] {
  const planets = readPlanetsFromFile();
  console.log(JSON.stringify(planets));
  return planets;
}

export function getPlanetFromDB(id: number): any {
  const planets = readPlanetsFromFile();
  console.log(planets, id)
  return planets.filter(e => e.id == id)[0];
}

export function updatePlanetInDB(id: number, name: string, mass: number): any {
  const planets = readPlanetsFromFile();
  console.log(JSON.stringify(planets, null, 2), id, name);
  let planet = planets.find(planet => planet.id == id) ?? new PlanetEntity(id, name, mass, Date.now());
  planet.name = name;
  planet.mass = mass;
  console.log(planets, "UPDATED");
  writePlanetsToFile(planets);
  return planet;
}

export function deletePlanetFromDB(id: number): any {
  const planets = readPlanetsFromFile();
  console.log(JSON.stringify(planets));
  const planet = planets.find(p => p.id == id)
  console.log(JSON.stringify(planets.filter(p => p.id != id), null, 2), "DELETE");
  writePlanetsToFile(planets.filter(p => p.id != id));
  return planet;
}

export function createPlanetInDb(name: string, mass: number): any {
  const planets = readPlanetsFromFile();
  console.log((Math.max(...planets.map(p => {return p.id}), -1) + 1), "MAX")
  console.log(JSON.stringify(planets));
  planets.push(new PlanetEntity((Math.max(...planets.map(p => {return p.id}), -1) + 1), name, mass, Date.now()));
  writePlanetsToFile(planets);
  console.log(JSON.stringify(planets));
  return planets[planets.length - 1];
}

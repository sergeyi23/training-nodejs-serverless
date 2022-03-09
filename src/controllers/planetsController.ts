import {
  createPlanetInDb,
  getAllPlanets,
  getPlanetByID,
  deletePlanetInDb,
  updatePlanetInDb,
} from 'src/core/db/repositories/planetsRepository';
import { CreatePlanetRequest } from 'src/model/CreatePlanetRequest';
import { CreatePlanetResponse } from 'src/model/CreatePlanetResponse';
import { GetPlanetIdRequest } from 'src/model/GetPlanetIdRequest';
import { GetPlanetResponse } from 'src/model/GetPlanetResponse';
import { GetPlanetsRequest } from 'src/model/GetPlanetsRequest';
import { GetPlanetsResponse } from 'src/model/GetPlanetsResponse';
import { UpdatePlanetRequest } from 'src/model/UpdatePlanetRequest';

export function getPlanets(_request: GetPlanetsRequest): GetPlanetsResponse {
  const planetsEntity = getAllPlanets();
  return new GetPlanetsResponse(planetsEntity);
}

export function getPlanet(request: GetPlanetIdRequest): GetPlanetResponse {
  const planetEntity = getPlanetByID(request.id);
  return new GetPlanetResponse(planetEntity);
}

export function deletePlanet(request: GetPlanetIdRequest): GetPlanetsResponse {
  const planetsEntity = deletePlanetInDb(request.id);
  return new GetPlanetsResponse(planetsEntity);
}

export function UdpatePlanet(request: UpdatePlanetRequest): GetPlanetsResponse {
  const planetEntity = updatePlanetInDb(
    request.id,
    request.name,
    request.active
  );
  return new GetPlanetsResponse(planetEntity);
}

export function createPlanet(
  request: CreatePlanetRequest
): CreatePlanetResponse {
  const newPlanet = createPlanetInDb(request.id, request.name, request.active);
  return new CreatePlanetResponse(newPlanet);
}

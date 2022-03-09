import { CreatePlanetRequest, CreatePlanetResponse } from 'src/model/planets/CreatePlanet';
import { GetPlanetsRequest,GetPlanetsResponse } from 'src/model/planets/GetPlanets';
import { GetPlanetRequest, GetPlanetResponse } from "../model/planets/GetPlanet";
import { DeletePlanetRequest, DeletePlanetResponse } from "../model/planets/DeletePlanet";
import { UpdatePlanetRequest, UpdatePlanetResponse } from "../model/planets/UpdatePlanet";
import {
  createPlanetInDb,
  deletePlanetById,
  getAllPlanets,
  getPlanetById, updatePlanetInDb
} from "../core/db/repositories/planetsRepository";

export function getPlanets(_request: GetPlanetsRequest): GetPlanetsResponse {
  const planetEntity = getAllPlanets();
  return new GetPlanetsResponse(planetEntity);
}

export function getPlanet(request: GetPlanetRequest): any {
  const planetEntity = getPlanetById(request.id);
  if (planetEntity === null)
    return { "error": "Planet not found" };
  return new GetPlanetResponse(planetEntity);
}

export function deletePlanet(request: DeletePlanetRequest): any {
  const planetEntity = deletePlanetById(request.id);
  if (planetEntity === null)
    return { "error": "Planet not found" };
  return new DeletePlanetResponse(planetEntity);
}

export function createPlanet(request: CreatePlanetRequest): CreatePlanetResponse {
  const newPlanet = createPlanetInDb(request.name, request.diameter);
  return new CreatePlanetResponse(newPlanet);
}

export function updatePlanet(request: UpdatePlanetRequest): any {
  const updatedPlanet = updatePlanetInDb(request.id, request.name, request.diameter);
  if (updatedPlanet === null)
    return { "error": "Planet not found" };
  return new UpdatePlanetResponse(updatedPlanet);
}

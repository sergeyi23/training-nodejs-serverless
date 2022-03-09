import { createPlanetInDb, deletePlanetFromDB, getAllPlanets, getPlanetFromDB, updatePlanetInDB } from "src/core/db/repositories/planetsRepository";
import { CreatePlanetRequest } from "src/model/planets/CreatePlanetRequest";
import { CreatePlanetResponse } from "src/model/planets/CreatePlanetResponse";
import { DeletePlanetRequest } from "src/model/planets/DeletePlanetRequest";
import { DeletePlanetResponse } from "src/model/planets/DeletePlanetResponse";
import { GetPlanetRequest } from "src/model/planets/GetPlanetRequest";
import { GetPlanetResponse } from "src/model/planets/GetPlanetResponse";
import { GetPlanetsRequest } from "src/model/planets/GetPlanetsRequest";
import { GetPlanetsResponse } from "src/model/planets/GetPlanetsResponse";
import { UpdatePlanetRequest } from "src/model/planets/UpdatePlanetRequest";
import { UpdatePlanetResponse } from "src/model/planets/UpdatePlanetResponse";

export function getPlanets(_request: GetPlanetsRequest): GetPlanetsResponse {
  const planetEntities = getAllPlanets();
  return new GetPlanetsResponse(planetEntities);
}

export function getPlanet(request: GetPlanetRequest): GetPlanetResponse {
  const planetEntity = getPlanetFromDB(request.id);
  console.log(request.id)
  return new GetPlanetResponse(planetEntity);
}

export function createPlanet(request: CreatePlanetRequest): CreatePlanetResponse {
  const newPlanet = createPlanetInDb(request.name, request.mass);
  return new CreatePlanetResponse(newPlanet);
}

export function updatePlanet(request: UpdatePlanetRequest): UpdatePlanetResponse {
  const planet = updatePlanetInDB(request.id, request.name, request.mass);
  return new UpdatePlanetResponse(planet);
}

export function deletePlanet(request: DeletePlanetRequest): DeletePlanetResponse {
  const planet = deletePlanetFromDB(request.id);
  return new DeletePlanetResponse(planet);
}

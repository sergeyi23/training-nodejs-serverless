import {
  createPlanetInDb,
  getAllPlanets,
  getPlanetIdInDb,
  updatePlanetIdInDb,
  deletePlanetInDb,
} from 'src/core/db/repositories/planetsRepository';
import { CreatePlanetRequest } from 'src/model/CreatePlanetRequest';
import { CreatePlanetResponse } from 'src/model/CreatePlanetResponse';
import { DeletePlanetRequest } from 'src/model/DeletePlanetRequest';
import { GetPlanetIdRequest } from 'src/model/GetPlanetIdRequest';
import { GetPlanetIdResponse } from 'src/model/GetPlanetIdResponse';
import { GetPlanetsRequest } from 'src/model/GetPlanetsRequest';
import { GetPlanetsResponse } from 'src/model/GetPlanetsResponse';
import { UpdatePlanetRequest } from 'src/model/UpdatePlanetRequest';
import { UpdatePlanetResponse } from 'src/model/UpdatePlanetResponse';

export function getPlanets(_request: GetPlanetsRequest): GetPlanetsResponse {
  const planetsEntity = getAllPlanets();
  return new GetPlanetsResponse(planetsEntity);
}

export function createPlanet(
  request: CreatePlanetRequest
): CreatePlanetResponse {
  const newPlanet = createPlanetInDb(request.id, request.name, request.active);
  return new CreatePlanetResponse(newPlanet);
}

export function getPlanetId(request: GetPlanetIdRequest): GetPlanetIdResponse {
  const planet = getPlanetIdInDb(request.id);
  return new GetPlanetIdResponse(planet);
}

export function deletePlanet(request: DeletePlanetRequest): {} {
  return deletePlanetInDb(request.id);
}

export function updatePlanet(
  request: UpdatePlanetRequest
): UpdatePlanetResponse {
  const updatedPlanet = updatePlanetIdInDb(
    request.id,
    request.name,
    request.active
  );

  return new UpdatePlanetResponse(updatedPlanet);
}

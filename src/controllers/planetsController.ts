import {
  createPlanetInDb,
  deletePlanetInDb,
  getAllPlanets,
  getPlanetByIdInDb,
  updatePlanetByIdInDb,
} from 'src/core/db/repositories/planetsRepository';
import { CreatePlanetRequest } from 'src/model/CreatePlanetRequest';
import { CreatePlanetResponse } from 'src/model/CreatePlanetResponse';
import { DeletePlanetRequest } from 'src/model/DeletePlanetRequest';
import { GetPlanetByIdRequest } from 'src/model/GetPlanetByIdRequest';
import { GetPlanetByIdResponse } from 'src/model/GetPlanetByIdResponse';
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
  const newPlanet = createPlanetInDb(request.name, request.habitable);
  return new CreatePlanetResponse(newPlanet);
}

export function getPlanetById(
  request: GetPlanetByIdRequest
): GetPlanetByIdResponse {
  const planet = getPlanetByIdInDb(request.id);
  return new GetPlanetByIdResponse(planet);
}

export function deletePlanet(request: DeletePlanetRequest): {} {
  return deletePlanetInDb(request.id);
}

export function updatePlanet(
  request: UpdatePlanetRequest
): UpdatePlanetResponse {
  const updatedPlanet = updatePlanetByIdInDb(
    request.id,
    request.name,
    request.habitable
  );

  return new UpdatePlanetResponse(updatedPlanet);
}

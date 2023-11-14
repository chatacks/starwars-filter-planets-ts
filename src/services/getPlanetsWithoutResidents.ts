import { PlanetsAPI } from '../types';

const getPlanetsWithoutResidents = async (): Promise<PlanetsAPI[]> => {
  try {
    const request = await fetch('https://swapi.dev/api/planets');

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const { results } = await request.json();

    const data:PlanetsAPI[] = results;

    const responseWithoutResidents = data
      .filter((result) => delete result.residents);

    return responseWithoutResidents;
  } catch (error: any) {
    return error;
  }
};

export default getPlanetsWithoutResidents;

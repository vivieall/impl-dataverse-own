import { sortBy, filterBy, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('sortBy', () => {
  it('debería ordenar los datos en orden ascendente por nombre', () => {
    const sortedData = sortBy(fakeData, 'asc');

    for (let i = 0; i < sortedData.length - 1; i++) {
      expect(sortedData[i].name.localeCompare(sortedData[i + 1].name)).toBeLessThanOrEqual(0);
    }
  });

  it('debería ordenar los datos en orden descendente por nombre', () => {
    const sortedData = sortBy(fakeData, 'desc');

    for (let i = 0; i < sortedData.length - 1; i++) {
      expect(sortedData[i].name.localeCompare(sortedData[i + 1].name)).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('filterBy', () => {
  it('debería devolver todos los datos si mainField está vacío', () => {
    const filteredData = filterBy(fakeData, '');

    expect(filteredData.length).toEqual(fakeData.length);
  });

  it('debería filtrar los datos por campo principal (mainField)', () => {
    const mainField = 'Matemáticas';
    const filteredData = filterBy(fakeData, mainField);

    for (const item of filteredData) {
      expect(item.facts.mainField).toContain(mainField);
    }
  });

  it('debería devolver un arreglo vacío si no hay coincidencias en el campo principal', () => {
    const mainField = 'Física Teórica'; // Un campo que no existe en los datos de prueba
    const filteredData = filterBy(fakeData, mainField);

    expect(filteredData.length).toEqual(0);
  });
});

describe('computeStats', () => {
  it('debería calcular la longitud total de los datos', () => {
    const totalLength = computeStats(fakeData);

    expect(totalLength).toEqual(fakeData.length);
  });
});

console.log("testing")

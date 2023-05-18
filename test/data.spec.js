import { filtroCont, filtroAz } from '../src/data.js';
import { ArrPaises, PaisesDesordenado } from './mock.js';
import { arrCont, arrAmerica } from './mock2.js';


describe('filtrandoAz', () => {
  it('is a function', () => {
    expect(typeof filtroAz).toBe('function');
  });

  it('returns `example`', () => {
    expect(filtroAz(PaisesDesordenado, 'az')).toEqual(ArrPaises);
  });
});

describe('filtrandoCont', () => {
  it('is a function', () => {
    expect(typeof filtroCont).toBe('function');
  });

  it('returns `example`', () => {
    expect(filtroCont(arrCont, 'América')).toEqual(arrAmerica);
  });
});


import { MONTH } from '@types';

export const LOOKUP_MONTH = {
  [MONTH.JAN]: { code: 'JAN', name: MONTH.JAN, days: 31 },
  [MONTH.FEB]: { code: 'FEB', name: MONTH.FEB, days: [28, 29] },
  [MONTH.MAR]: { code: 'MAR', name: MONTH.MAR, days: 31 },
  [MONTH.APR]: { code: 'APR', name: MONTH.APR, days: 30 },
  [MONTH.MAY]: { code: 'MAY', name: MONTH.MAY, days: 31 },
  [MONTH.JUN]: { code: 'JUN', name: MONTH.JUN, days: 30 },
  [MONTH.JUL]: { code: 'JUL', name: MONTH.JUL, days: 31 },
  [MONTH.AUG]: { code: 'AUG', name: MONTH.AUG, days: 31 },
  [MONTH.SEP]: { code: 'SEP', name: MONTH.SEP, days: 30 },
  [MONTH.OCT]: { code: 'OCT', name: MONTH.OCT, days: 31 },
  [MONTH.NOV]: { code: 'NOV', name: MONTH.NOV, days: 30 },
  [MONTH.DEC]: { code: 'DEC', name: MONTH.DEC, days: 31 },
};

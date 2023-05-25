import { format } from 'date-fns';

export const formatDate = (date: string | number | Date, dateFormat = 'M/d/yyyy'): string =>
  format(typeof date === 'string' ? new Date(date) : date, dateFormat);

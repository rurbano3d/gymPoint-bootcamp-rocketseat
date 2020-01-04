import { format, parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const formatDate = value => {
  if (!value) return null;
  const dateFormatted = formatDistance(parseISO(value), new Date(), {
    addSuffix: true,
    locale: pt,
  });

  return dateFormatted;
};

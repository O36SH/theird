import { formatDistanceToNow, format } from 'date-fns';
import { ar } from 'date-fns/locale';

export const formatRelativeTime = (date: string | Date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ar,
  });
};

export const formatMessageTime = (date: string | Date) => {
  return format(new Date(date), 'p', { locale: ar });
};

export const formatFullDate = (date: string | Date) => {
  return format(new Date(date), 'PPP', { locale: ar });
};
import { Notify } from 'quasar';

export const toast = async (
  message: string,
  position: 'top' | 'center' | 'bottom' = 'bottom',
  timeout = 1500,
  type = 'info'
): Promise<void> => {
  Notify.create({
    message,
    timeout,
    position,
    type
  });
}

import { toast, Bounce } from 'react-toastify';

/**
 * Display toast alert
*/

export const toastAlertType = {
  ERROR:"error",
  SUCCESS:"success"
}

export const toastAlert = (message, toastType) => {
  toast(message, {
    transition: Bounce,
    closeButton: true,
    autoClose: 3000,
    position: 'top-right',
    type: toastType
  });
}
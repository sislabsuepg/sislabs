import React, { createContext, ReactNode, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IToast {
  message: string;
  status: "success" | "error" | "warning";
}

interface IToastContext {
  showToast: ({message, status}: IToast) => void;
}

export const ToastContext = createContext<IToastContext>({ showToast: () => {} });

export const ToastProvider = ({children}: {children: ReactNode}) => {
  const showToast = useCallback(( {message, status}: IToast ) => {
    switch (status) {
      case "success":
        toast.success( message ,{
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        break;
      case "error":
        toast.error( message ,{
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        break;
      case "warning":
        toast.warning( message ,{
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        break;
      default:
        return null;
    }
  }, []);

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </ToastContext.Provider>
  )
}
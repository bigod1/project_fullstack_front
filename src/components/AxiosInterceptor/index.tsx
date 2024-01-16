import { ReactNode, useEffect, useState } from "react";
import { ModalError } from "../Modais/ModalError";
import axios from "axios";
import { api } from "../../services/api";

interface AxiosInterceptorProps {
    children: ReactNode;
}

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
    const [errorModal, setErrorModal] = useState(false);

    useEffect(() => {
        const errorInterceptor = (error: Error) => {
            if (!axios.isAxiosError(error)) {
                return Promise.reject(error);
            }

            if (error.response?.status === 401) {
                setErrorModal(true);
            }

            return Promise.reject(error);
        };

        const interceptor = api.interceptors.response.use(
            null,
            errorInterceptor
        );

        return () => api.interceptors.response.eject(interceptor);
    }, []);

    return (
        <>
            {errorModal && (
                <ModalError toggleModal={() => setErrorModal(!errorModal)} />
            )}
            {children}
        </>
    );
};

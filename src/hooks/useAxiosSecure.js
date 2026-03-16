import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
    baseURL: 'https://smart-deals-server-three.vercel.app',
})

const useAxiosSecure = () => {
    const { user, signOutWithGoogle } = useAuth();
    const navigateTo = useNavigate();

    useEffect(() => {
        // Request interceptor
        const requestInterceptor = instance.interceptors.request.use((config) => {
            console.log("Config: ", config);
            const token = user.accessToken;

            if (token) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }

            return config;
        })

        // Response interceptor
        const responseInterceptor = instance.interceptors.response.use(response => {

            return response;
        }, error => {

            console.log("Error inside the interceptor: ", error.response);

            const statusCode = error?.response?.status;

            if (statusCode === 401 || statusCode === 403) {
                console.log("Log out the user for bad request.");
                alert("Log out the user for bad request.");

                signOutWithGoogle()
                    .then(() => {
                        navigateTo('/register')
                        alert("You logged out!");
                    })
            }

            return Promise.reject(error);
        })


        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        }
    }, [user?.accessToken, signOutWithGoogle, navigateTo]);

    return instance;
}

export default useAxiosSecure;
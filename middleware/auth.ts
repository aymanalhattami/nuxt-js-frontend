import axios, {AxiosError} from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        await axios.get('/user');
    } catch (e) {
        // @ts-ignore
        if (e instanceof AxiosError && e.response?.status === 401) {
            return navigateTo('/login');
        }
    }
});

import axios from "axios";

export const useAuth = () => {
    interface LoginPayload
    {
        email: string;
        password: string;
    }

    interface RegisterPayload{
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    }


    // login
    async function login(payload: LoginPayload){
        await axios.post('/login', payload);
        useRouter().push('/me');
    }

    // register
    async function register(payload: RegisterPayload) {
        await axios.post('/register', payload);
        await login({
            email: payload.email,
            password: payload.password
        });
    }

    // logout
    async function logout(){
        await axios.post('/logout');
        useRouter().replace('/login');
    }

    return {
        login,
        register,
        logout
    };
};
import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: Date;
    two_factor_confirmed_at?: Date;
    two_factor_recovery_codes?: number;
    two_factor_secret?: string;
    updated_at: Date;
    created_at: Date;
}

const user = ref<User | null>(null);

export const useAuth = () => {
    async function getUser(): Promise<User | null> {
        if(user.value) return user.value;

        try {
            let response = await axios.get('/user');
            let user = response.data;

            return {
                ...user,
                created_at: new Date(user.created_at),
                updated_at: new Date(user.updated_at),
                email_verified_at: user.email_verified_at ? new Date(user.email_verified_at) : null,
                two_factor_confirmed_at: user.two_factor_confirmed_at ? new Date(user.two_factor_confirmed_at) : null,
            };
        } catch (err) {
            return null;
        }
    }

    async function initUser() {
        user.value = await getUser();
    }

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
        user.value = null;
        useRouter().replace('/login');
    }

    return {
        login,
        register,
        logout,
        initUser,
        user,
    };
};
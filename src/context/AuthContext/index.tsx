import { ReactNode, createContext, useState } from "react";
import { api } from "../../service/api";

interface AuthContextData {
	user: UserProps;
	isAuthenticated: boolean;
	signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
	id: string;
	name: string;
	email: string;
	token: string;
};

type SignInProps = {
	email: string;
	password: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<UserProps>({
		id: "ASASASA",
		name: "",
		email: "",
		token: "",
	});

	const [loadingAuth, setLoadingAuth] = useState(false);

	const signIn = async ({ email, password }: SignInProps) => {
		setLoadingAuth(true);

		try {
            const response = await api.post('/auth', {
                email,
                password
            })
            console.log(response.data)
		} catch (e) {
			console.log("erro ao acessar", e);
		}
	};

	const isAuthenticated = !!user.id;

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}

export interface User {
    id?: number;
    name: string;
    phone: string;
    email: string;
    password?: string;
    role_id: number;
}

export const defaultUserData: User = {
    name: "",
    phone: "",
    email: "",
    password: "",
    role_id: 0,
  }
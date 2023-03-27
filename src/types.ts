export interface UserResponse {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
}

export interface LoginParams {
    username: string;
    password: string;
}

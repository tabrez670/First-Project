export interface CategoryResponse {
    id: string;
    name: string;
    imageUrl: string;
    slug: string;
    priority: number;
    isVisible: boolean;
}

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

export interface BlogParams {
    id : string;
    title: string;
    trending: boolean;
    description: string;
    imageUrl: string;
    category: CategoryResponse;
    redirectUrl: string;
    categorySlug: string;
}

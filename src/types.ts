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
    email: string;
    password: string;
    name?: string;
    area?: string;
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

export enum Pages {
    SIGNUP = '/',
    HOME = "/signup",
    BLOG = "/blog",
    PRODUCTS = "/products",
    TEMPLATE = "/templ"
}
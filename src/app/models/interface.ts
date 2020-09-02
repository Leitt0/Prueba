export interface Posts{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostPorID{
    userId: number;
    id: number;
    name: string;
    email: string;
    body: any;
}

export interface PostPrincipalPorID{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface DatosPersonaPorID{
    name: string;
    username: string;
    email: string;
}

export class PostsClass{
    userId: number;
    id: number;
    title: string;
    body: string;
}
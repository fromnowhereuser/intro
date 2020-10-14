export class AppConfig {
    apiendpoint: string;
    title: string;
    mode: number;
}

export const CONFIG1: AppConfig = {
    apiendpoint: 'url1',
    title: 'main',
    mode: 1
}

export const CONFIG2: AppConfig = {
    apiendpoint: 'https://jsonplaceholder.typicode.com/users',
    title: 'secondary',
    mode: 2
}
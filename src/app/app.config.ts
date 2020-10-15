export class AppConfig {
    apiendpoint: string;
    title: string;
    mode: number;
}

export const CONFIG1: AppConfig = {
    apiendpoint: '',
    title: 'main',
    mode: 1
}

export const CONFIG2: AppConfig = {
    apiendpoint: 'http://91.121.148.187:8081/users/',
    title: 'secondary',
    mode: 2
}
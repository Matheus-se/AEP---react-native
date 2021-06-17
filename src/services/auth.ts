import { IUser } from "../models/Iuser";

interface Response {
    token: string,
    user: IUser
}

export function auth(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: '291i23iub238hr29fh98wno420398j98H98HNIOF-0j',
                user: {
                    name: 'Matheus Henrique',
                    email: 'matheushenrrique65@hotmail.com',
                    image: '',
                    birth: new Date(2002, 6, 29)?.toISOString(),
                    cpf: '12483188974',
                    phone: '44998689896',
                }
            })
        }, 2000);
    })
}
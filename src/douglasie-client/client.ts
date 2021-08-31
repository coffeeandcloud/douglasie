import axios, { AxiosResponse } from "axios";

export class Client {
    constructor() {
        
    }

    getFileList(file: string): Promise<AxiosResponse<any>>  {
        return axios.get(file, {
            socketPath: '/tmp/douglasie.sock'
        });
    }
}
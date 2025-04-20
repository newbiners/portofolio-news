import type { AxiosRequestConfig } from "axios";
import axios, { AxiosError } from "axios";

import { ServiceError } from "./ServiceError.";

const { CancelToken } = axios;
const source = CancelToken.source();

export default class Service {
    constructor(url: string, token?: string) {
        this.url = url;
        this.token = token || "";
        this.config = {
            headers: {
                keys: `RARauth ${this.token}`,
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Pragma: "no-cache",
                Expires: "0",
            },
            timeout: 0,
            cancelToken: source.token,
        };
    }

    url: string;

    token: string;

    config: AxiosRequestConfig;

    handleError(
        this: Service,
        error: AxiosError<{ statusCode: number; message: string }> | Error | unknown
    ) {
        const serviceError = new ServiceError(
            1,
            "Wah, sepertinya ada masalah pada jaringan nih... coba lagi nanti ya!"
        );

        if (error instanceof Error) {
            serviceError.message = error.message;
        }

        if (!(error instanceof AxiosError)) {
            return serviceError;
        }

        serviceError.code = error.response?.status || serviceError.code;

        if (error?.response && error?.response.status) {
            // sets message from the server first, before being replaced with friendlier message
            // based on status code
            serviceError.message = error.response.data.message;

            if ([401].indexOf(error?.response.status) !== -1) {
                // TODO: implement refresh token after back-end API is ready
                serviceError.message =
                    "Wah, sepertinya kamu perlu login kembali nih...";
            }
            if ([403].indexOf(error?.response.status) !== -1) {
                serviceError.message =
                    "Wah, maaf, kamu tidak memiliki akses ke halaman ini ya...";
            }
            if ([404].indexOf(error?.response.status) !== -1) {
                serviceError.message =
                    "Wah, maaf, sepertinya yang kamu cari tidak ditemukan nih...";
            }
            if (error?.response.status >= 500) {
                serviceError.message =
                    "Wah, sepertinya ada masalah pada server kami... maaf ya!";
            }
        }

        // console.error("handled error here");
        console.error(
            `ERROR-LOG ${new Date()} ${JSON.stringify({ error }, null, 2)}`
        );

        return serviceError;
    }

    async get(param: Record<string, unknown>) {
        if (!this.token || !this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }
        if (param) {
            this.config.params = param;
        }

        console.log(
            `wlog svc get token ${this.url} ${JSON.stringify(
                { acon: this.config },
                null,
                2
            )}`,
            this.token
        );

        try {
            return await axios.get(this.url, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getFile(opts: AxiosRequestConfig = { responseType: "arraybuffer" }) {

        if (!this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }

        this.config = {
            ...this.config,
            ...opts,
        };
        try {
            return await axios.get(this.url, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getWithoutToken(param: Record<string, unknown>) {
        // console.log("wlog svc getWithoutToken", this.url);
        if (!this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }
        // this.config.headers = {
        //   ...this.config.headers,
        //   Accept: "application/json;odata=nometadata",
        //   "Cache-Control": "no-cache",
        //   Pragma: "no-cache",
        //   Expires: "0",
        // };

        if (param) {
            this.config.params = param;
        }

        try {
            return await axios.get(this.url);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async post(
        param: FormData | Record<string, unknown>,
        additionalConfig: AxiosRequestConfig = {}
    ) {
        if (!this.token || !this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }
        // console.log('wslog svc post data', JSON.stringify({param, url, thisUrl: this.url, config: this.config}, null, 2));

        this.config = {
            ...this.config,
            ...additionalConfig,
            headers: {
                ...this.config.headers,
                ...additionalConfig.headers,
            },
        };

        try {
            return await axios.post(this.url, param, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }
    async postform(
        param: FormData | Record<string, unknown>,
        additionalConfig: AxiosRequestConfig = {}
    ) {
        if (!this.token || !this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }
        // console.log('wslog svc post data', JSON.stringify({param, url, thisUrl: this.url, config: this.config}, null, 2));

        this.config = {
            ...this.config,
            ...additionalConfig,
            headers: {
                ...this.config.headers,
                'Content-Type': 'multipart/form-data',
                ...additionalConfig.headers,
            },
        };
        // console.log(param, '====> param');
        try {
            // console.log(param, '====> url');
            return await axios.post(this.url, param, this.config);
        } catch (error) {

            // console.log('wlog svc error', error);
            throw this.handleError(error);
        }
    }
    async postWithoutToken(param: Record<string, unknown>) {
        if (!this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }

        try {
            return await axios.post(this.url, param, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async postImage(photo: any) {
        try {


            this.config.headers = {
                ...this.config.headers,
                "Content-Type": "multipart/form-data",
            };



            return await axios.post(this.url, photo, this.config);
        } catch (e) {
            throw this.handleError(e);
        }
    }

    // downlad file from server by id
    async postFile(data: Record<string, unknown>) {
        if (!this.token || !this.url || !this.config) {
            const errorMessages = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessages);
        }
        this.config.responseType = "blob";
        this.config = {
            ...this.config,
            timeout: 0,
        };

        console.log(
            `wlog svc get token ${this.url} ${JSON.stringify(
                { acon: this.config, data },
                null,
                2
            )}`,
            this.token
        );

        try {
            return await axios.post(this.url, data, this.config);
        } catch (error) {
            console.log(`lala ${error}`);
            throw this.handleError(error);
        }
    }

    async put(
        param: FormData | Record<string, unknown>,
        additionalConfig: AxiosRequestConfig = {}
    ) {
        if (!this.token || !this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }
        this.config = {
            ...this.config,
            ...additionalConfig,
            headers: {
                ...this.config.headers,
                ...additionalConfig.headers,
            },
        };
        try {
            return await axios.put(this.url, param, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async patch<T>(payload: T) {
        if (!this.token || !this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }

        try {
            return await axios.patch(this.url, payload, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async delete() {
        if (!this.token || !this.config || !this.url) {
            const errorMessage = new Error("Initialization Service Config Failed");
            throw this.handleError(errorMessage);
        }

        try {
            return await axios.delete(this.url, this.config);
        } catch (error) {
            throw this.handleError(error);
        }
    }
}
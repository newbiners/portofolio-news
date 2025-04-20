type Env = 'development' | 'uat' | 'production';

export const baseHostname = 'localhost:3002';
export const baseUrl: {
    [key in Env]: string;
} = {
    development: `http://${baseHostname}`,
    uat: `http://${baseHostname}`,
    production: `http://${baseHostname}`,
};
export const cookieName = `ea-rar`;
export const baseAPI = `${baseUrl[(process.env.NODE_ENV as Env) || 'development']
    }`;

if (process.env.NODE_ENV === 'production') {
    // eslint-ignore-next-line
    console.log = () => { };
}
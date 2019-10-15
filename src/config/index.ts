interface IConfig {
    baseUrl: string;
}

const config: IConfig = {
    baseUrl: process.env.VUE_APP_API_BASEURL,
};

export default config;


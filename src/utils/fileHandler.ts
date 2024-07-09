const BASE_PATH = './features/shared/strapi/';
const fs = require('fs'); 

export const STRAPI_DATA = {
    COUNTRIES: `${BASE_PATH}/countries.json`,
};


export const writeFile = (
    fs: typeof import('fs'),
    path: string,
    data: Record<string, unknown>,
    isCreateDir?: boolean
): void => {
    if (isCreateDir) {
        fs.promises.mkdir(BASE_PATH, { recursive: true }).catch(console.error);
    }
    fs.writeFileSync(path, JSON.stringify(data));
};

export const readFile = (fs: typeof import('fs'), path: string): any => {
    const dataBuffer = fs.readFileSync(path);
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
};
export const APP_PORT = process.env.APP_PORT || 8080;

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'doit_test_db';
export const DB_PORT = process.env.DB_PORT || 27017;

// TODO: add DB_URL in way of getting connection from the 'Atlas-server'
export const DB_URL = process.env.DB_URL || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export const FILE_FOLDER_NAME = 'flash_files';

import {BASE_URL} from "./config";

const getTours = (search = '') => {
   const query = search ? `search=${search}` : '';
   return fetch(`${BASE_URL}?${query}`);
}

export {
   getTours
};

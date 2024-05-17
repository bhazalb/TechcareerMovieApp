import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";


const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGEwM2I4ZTUzMGNiMTgyMzJkY2I1OGE3ZDQ4ZmIxMyIsInN1YiI6IjY2M2E3ZTFjMGY3YjBkZDMwMDVkZGE4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hyUs95GQCvN75vQzHQRlWM0pdlBzez11Rr29V7sZ7kw" 
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
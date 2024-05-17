import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageFound";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    const fetchApiConfig = async () => {
      try {
        const res = await fetchDataFromApi("configuration"); // Doğru endpoint
        console.log("API Response:", res);

        if (res && res.images && res.images.secure_base_url) {
          const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
          };

          dispatch(getApiConfiguration(url));
        } else {
          console.error("API response does not contain the expected data");
        }
      } catch (error) {
        console.error("Error fetching API configuration:", error);
      }
    };

    fetchApiConfig();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

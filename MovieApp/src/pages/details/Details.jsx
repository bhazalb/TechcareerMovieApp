import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
//import Cast from "./cast/Cast";
//import VideosSection from "./videosSection/VideosSection";
//import Similar from "./carousels/Similar";
//import Recommendation from "./carousels/Recommendation";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
    // useParams hook'u ile URL'den mediaType ve id parametrelerini alıyoruz
    const { mediaType, id } = useParams();

    // useFetch hook'u ile gerekli verileri çekiyoruz
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

    return (
        <div>
            {/* DetailsBanner bileşenine video ve crew verilerini geçiriyoruz */}
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />

            {/* Cast bileşenine cast verilerini ve yükleme durumunu geçiriyoruz */}
           <Cast data={credits?.cast} loading={creditsLoading} />

            {/* VideosSection bileşenine video verilerini ve yükleme durumunu geçiriyoruz */}
            <VideosSection data={data} loading={loading} />

            {/* Similar bileşenine mediaType ve id parametrelerini geçiriyoruz */}
            <Similar mediaType={mediaType} id={id} />

            {/* Recommendation bileşenine mediaType ve id parametrelerini geçiriyoruz */}
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;

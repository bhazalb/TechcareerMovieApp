import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    // Check if genres is defined
    if (!genres) {
        return null; // or some fallback UI
    }

    return (
        <div className="genres">
            {data?.map((g) => {
                const genre = genres[g];
                if (!genre || !genre.name) return null;
                return (
                    <div key={g} className="genre">
                        {genre.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;

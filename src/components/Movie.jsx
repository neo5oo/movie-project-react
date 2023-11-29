import React from "react";

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div id={id} className="movie card">
            <div class="card-image waves-effect waves-block waves-light">
                {poster === "N/A" ? (
                    <img
                        class="activator"
                        src={"https://placehold.jp/300x420.png"}
                    />
                ) : (
                    <img class="activator" src={poster} />
                )}
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    {title}
                    <i class="material-icons right"></i>
                </span>
                <p>
                    {year} <span className="right">{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };

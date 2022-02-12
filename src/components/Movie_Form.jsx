import React from 'react'

const Movie_Form = ({ match, history }) => {
    return (
        <div>
            <h3>Movie_Form {match.params.id}</h3>
            <button
                className="btn btn-primary"
                onClick={() => history.push("/movies")}
            >
                Save
            </button>
        </div>
    )
}

export default Movie_Form
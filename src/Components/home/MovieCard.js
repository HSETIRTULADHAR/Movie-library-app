import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            
                <div className="col-md-3 mb-5">
                    <div className="card card-body bg-dark text-center h-100">
                        <img className="mb-2" src={movie.Poster} alt="Movie poster" />
                        <h4 className="card-title text-light">
                           {movie.Title} - {movie.Year}
                        </h4>
                        <Link className="btn btn-primary" to={'/movie/'+ movie.imdbID}>
                          Movie Details
                            <i className="fas fa-chevron-right" />
                        </Link>
                    </div>

                
                
            </div>
        )
    }
}

export default MovieCard

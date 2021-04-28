import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchaMovie,setLoading} from '../../actions/searchActions';
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'

export class Movie extends Component {
    componentDidMount()
    {
        this.props.fetchaMovie(this.props.match.params.id)
        this.props.setLoading()
    }
    render() {
       const {loading,movie} = this.props
       let movieInfo = (
        <React.Fragment>
        <div className="row">
            <div className="col-md-4 card card-body">
                <img src={movie.Poster} alt="Poster" className="thumbnail" />
            </div>
            <div className="col-md-8">
                <h2 className="mb-4"> {movie.Title}</h2>
                <ul className = "list-group">
                    <li className="list-group-item">
                        <strong>Genre:</strong>{movie.Genre}
                    </li>
                    <li className="list-group-item">
                        <strong>Released:</strong> {movie.Released}
                    </li>
                    <li className="list-group-item">
                        <strong>Rated:</strong> {movie.Released}
                    </li>
                    <li className="list-group-item">
                        <strong>Imdb Rating:</strong> {movie.imdbRating}
                    </li>
                    <li className="list-group-item">
                        <strong>Director:</strong> {movie.Director}
                    </li>
                    <li className="list-group-item">
                        <strong>Writer:</strong> {movie.Writer}
                    </li>
                    <li className="list-group-item">
                        <strong>Actors:</strong> {movie.Actors}
                    </li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="card card-body bg-dark text-light my-5">
                <div className="col-md-12">
                    <h3>Synopsis</h3>
                    {movie.Plot}
                    <hr />
                    <a
                      href={"https://www.imdb.com/title/"+ movie.imdbID}
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      >
                        View on IMDB
                    </a>
                    <Link to='/' className="btn btn-default text-light">
                        Search
                    </Link>

                </div>
            </div>
        </div>
    </React.Fragment>
       )
    
       let content = loading ? <Spinner /> : movieInfo
        return (
          <div>{content}</div>  
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchaMovie, setLoading})(Movie);

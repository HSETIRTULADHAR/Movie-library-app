import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner.js';
import MoviesContainer from './MoviesContainer';

 class landing extends Component {
    render() {
        const {loading} = this.props; 
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStateToProps)(landing);
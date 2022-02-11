import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import List_Group from './List_Group';
import Pagination from './common/Pagination';
import { paginate } from '../utilities/Paginate'
import Movies_Table from './Movies_Table';
import _, { filter } from "lodash"

class Movies extends React.Component {
  state = {
    genres: [],
    movies: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' }
  }

  componentDidMount() {
    const genres = [{ _id: '', name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page })
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  };

  handleSort = sortColumn => {

    this.setState({ sortColumn })
  };

  getPagedData = () => {
    const { pageSize, currentPage, selectedGenre, sortColumn, movies: allMovies } = this.state;
    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    _.orderBy(filtered, [sortColumn.path])

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0)
      return <p>There are no movies in the database.</p>

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="main-table d-flex">
        <div>
          <List_Group
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="ml-4">
          <p>Showing {totalCount} movies in the database.</p>
          <Movies_Table
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>);
  }
}

export default Movies;
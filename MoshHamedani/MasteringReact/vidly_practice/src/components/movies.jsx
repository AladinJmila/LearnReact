import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Like from './common/like'
import ListGroup from './common/listGroup'
import _ from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortColumn: { path: 'Title', order: 'asc' },
  }

  componentDidMount() {
    const genres = [{ key: 'allGenres', name: 'All Genres' }, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({ movies })
  }

  handleLike = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movie }
    movies[index].liked = !movies[index].liked

    this.setState({ movies })
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre })
  }

  handleSort = path => {
    const sortColumn = { ...this.state.sortColumn }
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }
    this.setState({ sortColumn })
  }

  render() {
    const { length: count } = this.state.movies
    const { selectedGenre, movies, sortColumn, handleSort } = this.state

    if (count === 0) return <p>There are no movies in the database</p>

    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(m => m.genre._id === selectedGenre._id)
        : movies

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <p>Showing {filtered.length} movies in the database</p>
          <table className='table'>
            <thead>
              <tr>
                <th onClick={() => this.handleSort('title')}>Title</th>
                <th onClick={() => this.handleSort('genre.name')}>Genre</th>
                <th onClick={() => this.handleSort('numberInStock')}>Stock</th>
                <th onClick={() => this.handleSort('dailyRentalRate')}>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sorted.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className='btn btn-danger btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Movies

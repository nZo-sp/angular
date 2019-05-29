import { Component } from '@angular/core';

@Component({
  templateUrl: './movie-search.component.html',
  styleUrls: [ './movie-search.component.css' ]
})
export class MovieSearchComponent  {
  titleText = 'Angular course: lesson 4';
  selectedMovie = undefined;

  onMovieSelection(movie) {
    console.log('onMovieSelection', movie);
    this.selectedMovie = movie;
  }
}

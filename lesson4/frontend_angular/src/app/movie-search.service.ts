import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const API_KEY = '15d2ea6d0dc1d476efbca3eba2b9bbfb';

@Injectable()
export class MovieSearchService {
    constructor(private httpClient: HttpClient) { }

    public search(name: string): Observable<SearchResult> {
        if (!name) {
            return of({
                page: 1,
                results: [],
                total_pages: 1,
                total_results: 0
            });
        }

        return this.httpClient.get<SearchResult>(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${encodeURI(name)}`);
    }
}

export interface SearchResult {
    page: number;
    results: Array<SearchResultItem>
    total_pages: number;
    total_results: number;
}

export interface SearchResultItem {
    adult: boolean;
    backdrop_path: string;
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    name: string;
    vote_average: number;
    vote_count: number;
}
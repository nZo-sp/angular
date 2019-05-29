import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, filter, map, switchMap} from 'rxjs/operators';
import {MovieSearchService, SearchResultItem} from '../movie-search.service';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-movie-finder',
    templateUrl: './movie-finder.component.html',
    styleUrls: ['./movie-finder.component.css']
})
export class MovieFinderComponent implements OnInit, OnDestroy {
    @ViewChild('searchInput') searchInput: ElementRef;
    @Output() selectedMovie = new EventEmitter<SearchResultItem>();

    public searchResult: Array<SearchResultItem> = [];
    public selection;

    private searchSubscription;
    private lastSearch = '';

    constructor(private movieSearch: MovieSearchService) {
    }

    ngOnInit() {
        this.searchSubscription = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
            debounceTime(500),
            map((v: any) => {
                return v.target.value.toLowerCase();
            }),
            filter((value: string) => {
                if (!value || value.length < 3 || value === this.lastSearch) {
                    return false;
                }

                this.lastSearch = value;
                return true;
            }),
            switchMap((value: string) => {
                return this.movieSearch.search(value);
            })
        ).subscribe((v) => {
            this.searchResult = v.results;
            console.log(v.results);
        });
    }

    ngOnDestroy() {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }

    handleSelection(selection: SearchResultItem) {
        console.log('handleSelection', selection)
        this.selection = this.selection === selection ? undefined : selection;
        this.selectedMovie.emit(this.selection);
    }
}
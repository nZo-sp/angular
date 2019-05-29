import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchResultItem} from '../movie-search.service';
import {CommentItem, MovieCommentsService} from "../movie-comments.service";

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnChanges {

    @Input() selection: SearchResultItem;
    private comments: Array<CommentItem> = [];
    private commentToAdd: any = {username: "", text: ""};

    constructor(private commentService: MovieCommentsService) {}

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.comments = [];

        if (this.selection != null) {
            this.getComments();
        }
    }

    getComments() {
        this.commentService.getCommentsByIdFilm(this.selection.id).subscribe(res => {
            this.comments = res.reverse();
        })
    }

    addComment() {

        this.commentService.putComment(this.selection.id, this.commentToAdd.username, this.commentToAdd.text).subscribe( res => {
            if (res.success) {
                this.commentToAdd.username = "";
                this.commentToAdd.text = "";

                // RELOAD
                this.getComments();
            }
        })
    }

}
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MovieCommentsService {

    constructor(private httpClient: HttpClient) {
    }

    public getCommentsByIdFilm(idFilm: number): Observable<CommentItem[]> {

        let params = new HttpParams().set("id", String(idFilm));
        return this.httpClient.get<CommentItem[]>('http://localhost:4000/films/comments', {params: params});
    }

    public putComment(idFilm: number, username: string, comment: string): Observable<CommentResponse> {

        return this.httpClient.post<CommentResponse>('http://localhost:4000/films/comments/add', {"id_film": idFilm, "username": username, "comment": comment});
    }
}

export interface CommentItem {
    id: number;
    username: string;
    text: string;
    date: string;
}

export interface CommentResponse {
    success: boolean;
    comment: CommentItem;
}
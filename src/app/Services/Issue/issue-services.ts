import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Issue } from '../../Models/Issue/issue.model';

@Injectable({
  providedIn: 'root',
})
export class IssueServices {

  private apiUrl = `${environment.apiUrl}issues`

  constructor(private http: HttpClient){}

  displayIssues():Observable<Issue[]>{
    return this.http.get<Issue[]>(`${this.apiUrl}`);
  }
  storeIssue(post: Issue):Observable<Issue>{
    return this.http.post<Issue>(`${this.apiUrl}/store`, post);
  }
}

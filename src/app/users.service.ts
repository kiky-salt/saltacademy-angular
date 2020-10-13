import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './models/users.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private getData(response: any): any {
    return response.data;
  }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.backendURL}users`).pipe(
      map(this.getData)
    );
  }

  public createUser(user: User): Observable<boolean> {
    return this.http.post(`${environment.backendURL}users`, user).pipe(
      map(result => true)
    );
  }
}

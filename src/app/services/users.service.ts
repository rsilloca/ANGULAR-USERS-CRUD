import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URI}/users`);
  }

  getUsersPerPage(page: number) {
    return this.http.get(`${this.API_URI}/users?page=${page}`);
  }

  getUser(id: string) {
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  addUser(user: User) {
    return this.http.post(`${this.API_URI}/users`, user);
  }

  updateUser(id: string|number, updatedUser: User): Observable<User> {
    return this.http.put(`${this.API_URI}/users/${id}`, updatedUser);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

}

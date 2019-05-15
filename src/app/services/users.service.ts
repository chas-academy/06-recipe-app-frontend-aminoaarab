import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://recipe.test/api'

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/user/login`, data)
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/user/register`, data)
  }

  getSavedRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}saved/`);
  }

  sendRecipe(data) {
    return this.http.post(`${this.baseUrl}/user/save-recipe`, data);
  }

  deleteSavedRecipe(recipe) {
    return this.http.post<any>(`${this.baseUrl}/delete-recipe`, recipe);
  }
}
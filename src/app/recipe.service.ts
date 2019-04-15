import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  API_KEY = '6b0e2a2985ce92569b9d389bd525a255';
  APP_ID = 'a9bf98cd';
  healthLabel: string;

  constructor(private http: HttpClient) { }

  getRecipes(searchString, healthLabel): Observable<any>{
    return this.http.get<any>(`http://api.edamam.com/search?app_id=${this.APP_ID}&app_key=${this.API_KEY}&q=${searchString}&from=0&to=15${healthLabel}`);
  }

  getRecipe(id): Observable<any> {

    return this.http.get(`http://api.edamam.com/search?q=${id}&app_id=${this.APP_ID}&app_key=${this.API_KEY}&from=0&to=1`)
  }

}

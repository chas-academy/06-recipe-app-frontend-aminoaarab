import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  API_KEY = '6b0e2a2985ce92569b9d389bd525a255';
  APP_ID = 'a9bf98cd';

  constructor(private http: HttpClient) { }

  getRecipes(searchString): Observable<any>{
    return this.http.get<any>(`http://api.edamam.com/search?app_id=${this.APP_ID}&app_key=${this.API_KEY}&q=${searchString}`);
  }

}

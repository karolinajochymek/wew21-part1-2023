import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Zarejestrowanie serwisu jako globalnego - dostepny dla kazdego komponentu w aplikacji (rekomendowany sposob rejestracji service)
})
export class DataService {
  private dataUrl = '../assets/data.settings.json'; //plik z danymi do wyswietlenia / w tym miejscu można uzyc URL do api
  

  get items(): Item[] {
    return [];
  }

  getProducts(): Observable<Item[]> {
    return this.http.get(this.dataUrl) as Observable<Item[]>;
  }

  getProductDetails(id: number | null): Observable<Item | undefined> {
      //return this.http.get(`${this.dataUrl}/${id}`) as Observable<Item>; //wywołanie zewnetrznego API -> endpoint do konkretnego itemu, na bazie parametru id
      return this.getProducts().pipe(map(items => items.find(i => i.no === id))); //Pobieranie detailsow itemu na bazie zapytania o liste produktow (przypadek pobierania z pliku) -> pobieramy liste i filtrujemy po id
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  private apiUrl = 'https://localhost:4200/planetas'; // Cambia esto a tu API real

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.apiUrl);
  }
}

/*Crear interfaz en planet.model.ts

export interface Planeta {
  id: number;
  name: string;
  description: string;
  characters: string[]; // o cualquier otra estructura que se adapte
}
*/
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent {
planetas: any[] = [];
mostrarPlaneta(arg0: any) {
throw new Error('Method not implemented.');
}

}

/*
Obtener los datos en el componente: 
En planets.component.ts, inyecta el servicio y 
llama al método para obtener los datos de los planetas.


import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Planet } from '../planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }
}


*/
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  results: any[] = [
    {
      name: 'Juego 1',
      value: 24
    },
    {
      name: 'Juego 2',
      value: 12
    },
    {
      name: 'Juego 3',
      value: 32
    },
    {
      name: 'Juego 4',
      value: 28
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {
    this.intervalo = setInterval( () => {
      const newResults = [...this.results];

      for( let i in newResults ) {
        newResults[i].value = Math.round( Math.random() * 500 );
      }

      this.results = [...newResults];
    }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    clearInterval( this.intervalo );
  }

}

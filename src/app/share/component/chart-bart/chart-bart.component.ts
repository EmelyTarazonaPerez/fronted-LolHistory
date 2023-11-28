import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import { GameHistoryService } from 'src/app/service/match/game-history.service';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-bart',
  templateUrl: './chart-bart.component.html',
  styleUrls: ['./chart-bart.component.scss']
})
export class ChartBartComponent implements OnChanges, AfterViewInit {

  @Input() date!: number
  @Input() iconoChamp!: String
  @Input() showDetail!: boolean

  colorColumsPlayer: String = '#F8F206'
  colorColumnsParticipant = [
    '#0096888f',
    '#0096888f',
    '#0096888f',
    '#0096888f',
    '#0096888f',
    '#B7253F',
    '#B7253F',
    '#B7253F',
    '#B7253F',
    '#B7253F'
  ]
  constructor(private _match: GameHistoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this._match.getSummaryDamage(this.date).subscribe(resp => {
      const names = resp.map(img => img.championPng);
      const damages = resp.map(damage => damage.damage)
      //sacar posicion del jugador
      const indexPlayer = names.indexOf(this.iconoChamp)
      console.log(indexPlayer)
      this.colorColumnsParticipant.splice(indexPlayer,1, this.colorColumsPlayer as string)
      this.chartShow(names, damages)
    })
  }


  ngAfterViewInit() {
    this._match.getSummaryDamage(this.date).subscribe(resp => {
      const names = resp.map(img => img.championPng);
      const damages = resp.map(damage => damage.damage)
      //sacar posicion del jugador
      const indexPlayer = names.indexOf(this.iconoChamp)
      this.colorColumnsParticipant.splice(indexPlayer,1, this.colorColumsPlayer as string)
      this.chartShow(names, damages)

    })
  }

  chartShow(names: String[], damages: number[]) {

    const data = {
      labels: ['', '', '', '', '', '', '', '', '', ''],
      datasets: [{
        label: 'Damage',
        data: damages,
        backgroundColor: this.colorColumnsParticipant,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: this.colorColumnsParticipant
      }]
    }

    const xScaleImage = {
      id: 'xScaleImage',
      afterDatasetsDraw(chart: any, args: any, plugins: any) {
        const { ctx, data, chartArea: { bottom }, scales: { x } } = chart;
        ctx.save();
        names.forEach((image, index) => {
          const label = new Image();
          label.src = image as string
          const width = 25;
          ctx.drawImage(label, x.getPixelForValue(index) - (width / 2), x.top, width, width);
        })
      }
    }

    return new Chart(this.iconoChamp as string, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [xScaleImage]
    });

  }

}



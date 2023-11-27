import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import { GameHistoryService } from 'src/app/service/match/game-history.service';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-bart',
  templateUrl: './chart-bart.component.html',
  styleUrls: ['./chart-bart.component.scss']
})
export class ChartBartComponent {

  @Input() date!: number

  constructor(private _match: GameHistoryService) { }

  ngOnInit() {
    console.log('bar-chart')
    this._match.getSummaryDamage(this.date).subscribe(resp => {
      const names = resp.map(img => img.championPng);
      const damages = resp.map(damage => damage.damage)
      this.chartShow(names, damages)

    })
  }

  chartShow(names: String[], damages: number[]) {
    const ctx = <HTMLCanvasElement>document.getElementById("bar-chart");

    const data = {
      labels: ['','','','','','','','','',''],
      datasets: [{
        label: '# of Votes',
        data: damages,
        backgroundColor: [
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
        ],
        borderWidth: 1,
      }]
    }

    const xScaleImage = {
      id: 'xScaleImage',
      afterDatasetsDraw(chart: any, args: any, plugins: any) {
        const { ctx, data, chartArea: {bottom}, scales : {x} } = chart;
        ctx.save();
        names.forEach((image, index) => {
          const label = new Image();
          label.src = image as string
          const width = 25;
          ctx.drawImage(label,  x.getPixelForValue(index) - (width/2), x.top, width, width);
        })
      }
    }

    return new Chart(ctx, {
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

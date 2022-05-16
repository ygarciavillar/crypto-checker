import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import { CryptoService } from '../../../core/services/crypto.service';

const chartConfiguration = {
  dataConfiguration: {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#FFEB3B',
        pointBackgroundColor: '#FFEB3B',
        pointBorderColor: '#FFEB3B',
        pointHoverBackgroundColor: '#FFEB3B',
        pointHoverBorderColor: '#FFEB3B',
      }
    ],
    labels: []
  },

  optionConfiguration: {
    elements: {
      point: {
        radius: 1
      }
    },
  
    plugins: {
      legend: { display: true },
    }
  }
}

@Component({
  selector: 'app-coin-chart',
  templateUrl: './coin-chart.component.html',
  styleUrls: ['./coin-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CoinChartComponent implements OnInit {

  @Input() coinId!: string;
  @Input() currency!: string;
  days: number = 30;

  lineChartData: ChartConfiguration['data'] = chartConfiguration.dataConfiguration ;
  lineChartOptions: ChartConfiguration['options'] = chartConfiguration.optionConfiguration;

  lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;

  constructor(private crytoService: CryptoService) { }

  ngOnInit(): void {
    this.getGraphData(this.days);
  }

  getGraphData(days: number){
    this.days = days
    this.crytoService.getDataChart(this.coinId, this.days).subscribe( data => {
      setTimeout(() => {
        this.myLineChart.chart?.update();
      }, 200);
      this.lineChartData.datasets[0].data = data.prices.map( p => {
        return p[1]
      });
      this.lineChartData.labels = data.prices.map( p => {
        let date = new Date(p[0]);
        let time = date.getHours() > 12 ?
        `${date.getHours() - 12}: ${date.getMinutes()} PM` :
        `${date.getHours()}: ${date.getMinutes()} AM`
        return this.days === 1 ? time : date.toLocaleDateString();
      })
    })
  }

}

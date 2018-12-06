import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';

import { ShowGraphService } from '../services/show-graph.service';
import { WorkTime } from '../work_time';

@Component({
  selector: 'app-show-graph',
  templateUrl: './show-graph.component.html',
  styleUrls: ['./show-graph.component.css'],
  providers: [ShowGraphService]
})
export class ShowGraphComponent {
  @Input() data = [];
  work_time: WorkTime;

  @ViewChild('myChart') ref: ElementRef;

  context: CanvasRenderingContext2D;
  chart: Chart;

  constructor() {} 

  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.ref.nativeElement).getContext('2d');
    this.draw('pie', this.getworktimes(this.data));
  }

  getworktimes(data){
    var category_name = [];
    var time = [];
    for(var work_time in data) {
      category_name.push(work_time)
      time.push(data[work_time]);
    }
    return [category_name,time]
  }

  draw(show_type,work_time) {
    this.chart = new Chart(this.context, {
      type: show_type,
      data: {
        labels: work_time[0],
        datasets: [{
          label: 'カテゴリ',
          data: work_time[1],
          /*backgroundColor:*/
        }]
      }
    });
  }

}
import {Component, OnInit} from '@angular/core';
import {DataService} from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-test';
  subnetData = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    const data = this.dataService.getUserUsageData();
    (data || []).forEach((item) => {
      return item.totalUser = Object.values(item.userData).reduce((a: any, b: any) => a + b, 0);
    });
    this.subnetData = data;
    console.log(this.subnetData);
  }

}

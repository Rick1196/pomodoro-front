import { CdkDropList } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  @ViewChildren(CdkDropList)
  dropsQuery!: QueryList<CdkDropList>;
  dropsAreas!: CdkDropList[];
  constructor() {}

  ngAfterViewInit(): void {
    this.dropsQuery?.changes.subscribe(() => {
      this.dropsAreas = this.dropsQuery?.toArray();
      console.log(this.dropsAreas);
    });
    Promise.resolve().then(() => {
      this.dropsAreas = this.dropsQuery?.toArray();
      console.log(this.dropsAreas);
    });
  }
}

import { CdkDropList } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SectionI } from 'src/app/interfaces/section';
import { SectionsService } from 'src/app/services/sections/sections.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(CdkDropList)
  dropsQuery!: QueryList<CdkDropList>;
  dropsAreas!: CdkDropList[];
  public teamId:string = '';
  public sections:Observable<SectionI[]>;
  constructor(public router:ActivatedRoute, public sectionsService: SectionsService) {}

  ngOnInit():void {
    this.sections = this.router.paramMap.pipe(
      switchMap(params => {
        this.teamId = params.get('id');
        return this.sectionsService.readTeamSections(this.teamId);
      })
    );
    this.sections.subscribe(sections=>{
      console.log('Sections', sections);
    });
  }

  ngAfterViewInit(): void {
    this.dropsQuery?.changes.subscribe(() => {
      this.dropsAreas = this.dropsQuery?.toArray();
      console.log(this.dropsAreas);
    });
    Promise.resolve().then(() => {
      this.dropsAreas = this.dropsQuery?.toArray();
      console.log(this.dropsAreas);
    }).catch((error)=>{
      console.error(error);
    })
  }
}

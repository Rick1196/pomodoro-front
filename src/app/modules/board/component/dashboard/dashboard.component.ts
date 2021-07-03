import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
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
import { TodoI } from 'src/app/interfaces/TodoI';
import { SectionsService } from 'src/app/services/sections/sections.service';
import { TodosService } from 'src/app/services/todos/todos.service';

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
  constructor(public router:ActivatedRoute, public sectionsService: SectionsService, public todosService:TodosService) {}

  ngOnInit():void {
    this.sections = this.router.paramMap.pipe(
      switchMap(params => {
        this.teamId = params.get('id');
        return this.sectionsService.readTeamSections(this.teamId);
      })
    );
  }

  ngAfterViewInit(): void {
    this.sections.subscribe(sections=>{
      console.log('Sections', sections);
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
    });
  }

  public dropped(event: CdkDragDrop<number, any>, section:SectionI):void{
    const todo:TodoI = event.item!.data;
    if(todo.sectionId !== section.uid){
      todo.sectionId = section.uid;
      todo.dateUpdated = new Date();
      console.log('Todo new data', todo, section);
      this.todosService.updateTodo(todo).then(()=>{
        console.log('Update success', todo);
      }).catch(error=>{
        console.error('Update todo', error)
      })
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SectionI } from 'src/app/interfaces/section';
import { SectionsService } from 'src/app/services/sections/sections.service';
@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
})
export class CreateSectionComponent implements OnInit {
  @Input() teamId: string = '';
  public sectionForm = new FormControl(
    null,
    [Validators.required,Validators.minLength(1),
      Validators.pattern('(.+[a-zA-Z])(\n+)')])
  constructor(public sectionsService: SectionsService) { }

  ngOnInit(): void {
  }

  public saveNewSection():void{
    if(this.sectionForm.valid === true){
      const sectionData:SectionI = {
        dateCreated: new Date(),
        dateUpdated: new Date(),
        name: this.sectionForm.value,
        teamId: this.teamId,
      };
      console.log('New section name', sectionData);
      this.sectionsService.createSection(sectionData);
      this.sectionForm.setValue(null);
      this.sectionForm.reset();
    }
  }

}

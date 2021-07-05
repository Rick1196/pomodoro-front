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
  @Input() nextIndex:number = 0;
  public sectionForm = new FormControl(
    null,
    [Validators.required,
      Validators.minLength(3)])
  constructor(public sectionsService: SectionsService) { }

  ngOnInit(): void {
  }

  public saveNewSection():void{
    console.log('Section form status', this.sectionForm);
    if(this.sectionForm.valid === true){
      const sectionData:SectionI = {
        dateCreated: new Date(),
        dateUpdated: new Date(),
        name: this.sectionForm.value,
        teamId: this.teamId,
        index: this.nextIndex
      };
      console.log('New section name', sectionData);
      this.sectionsService.createSection(sectionData);
      this.sectionForm.setValue(null);
      this.sectionForm.reset();
    }
  }

}

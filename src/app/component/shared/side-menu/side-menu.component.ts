import { Component, OnInit } from '@angular/core';
import { SideMenuService } from 'src/app/services/side-menu/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {
  public containerClass:string = 'left-side closed';
  constructor(
    public menuService: SideMenuService
  ) { 
    this.menuService.menuStatusObservable.subscribe({
      next: (status:boolean) => {
        this.containerClass = (status)?'left-side closed':'left-side'
      },
      error: (error)=>{
        console.error(error);
      }
    })
  }

  ngOnInit(): void {
  }

}

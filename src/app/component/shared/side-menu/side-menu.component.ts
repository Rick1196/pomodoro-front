import { Component, OnInit } from '@angular/core';
import { SideMenuService } from 'src/app/services/side-menu/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {
  constructor(
    public menuService: SideMenuService
  ) { 
  }

  ngOnInit(): void {
  }

}

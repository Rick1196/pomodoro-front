import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  public menuStatus:boolean = false;
  public menuStatusObservable: Subject<boolean> = new Subject();
  constructor() { }
}

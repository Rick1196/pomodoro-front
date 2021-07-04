import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamI } from 'src/app/interfaces/TeamI';
import firebase from 'firebase/app';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
})
export class TeamsListComponent implements OnInit, OnDestroy {
  public teams: Array<TeamI>;
  public user: firebase.User;
  public componentDestroyed: Subject<void> = new Subject();
  public teamSelected:string = '';
  constructor(
    public authService: AuthenticationService,
    public teamsService: TeamsService,
    public router:Router,
    public route: ActivatedRoute
  ) {
    this.authService
        .getAuthenticationStatus()
        .pipe(take(1))
        .subscribe({
          next: (user) => {
            this.user = user;
            this.readTeams();
          },
          error: (err) => console.error('Create team --- user data', err),
        });
  }

  public readTeams():void {
    this.teamsService.readUserTeams(this.user.uid).pipe(takeUntil(this.componentDestroyed)).subscribe({
      next: (teams)=>{
        this.teams = teams;
        console.log(teams);
      },
      error: (err) => console.error(err),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.componentDestroyed)).subscribe({
        next: (params) => this.teamSelected = params.get('id'),
        error: (err) => console.error(err)        
      });
  }

  changeTeam(team: TeamI):void{
    this.router.navigate(['/board',team.uid]);
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
  }
}

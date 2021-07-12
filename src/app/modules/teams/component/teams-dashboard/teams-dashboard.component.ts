import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-teams-dashboard',
  templateUrl: './teams-dashboard.component.html',
})
export class TeamsDashboardComponent implements OnInit, OnDestroy {
  public componentDestroyed: Subject<void> = new Subject();
  public user: firebase.User | null = null;
  constructor(
    public teamsService: TeamsService,
    public authService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.authService
        .getAuthenticationStatus()
        .pipe(take(1))
        .subscribe({
          next: (user) => {
            this.readUserTeams(user.uid);
          },
          error: (err) => {
            console.error(err);
          },
        });
  }

  readUserTeams(userId: string): void {
    this.teamsService
        .readUserTeams(userId)
        .pipe(takeUntil(this.componentDestroyed))
        .subscribe({
          next: (teams) => {
            console.log(teams);
          },
          error: (err) => {
            console.error('User teams', err);
          },
        });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
  }
}

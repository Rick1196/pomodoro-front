import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import firebase from 'firebase/app';
import { take } from 'rxjs/operators';
import { TeamI } from 'src/app/interfaces/TeamI';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
})
export class CreateTeamComponent implements AfterViewInit {
  public user: firebase.User;
  public teamNameForm = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
  ]);
  @ViewChild('teamInput') teamInput: ElementRef;
  constructor(
    public authService: AuthenticationService,
    public teamsService: TeamsService,
  ) {
    this.authService
        .getAuthenticationStatus()
        .pipe(take(1))
        .subscribe({
          next: (user) => (this.user = user),
          error: (err) => console.error('Create team --- user data', err),
        });
  }

  ngAfterViewInit(): void {
    this.teamInput.nativeElement.focus();
  }

  verifyName(): void {
    if (this.teamNameForm.valid === true) {
      const teamData: TeamI = {
        dateCreated: new Date(),
        dateUpdated: new Date(),
        name: this.teamNameForm.value,
        owner: { id: this.user.uid },
        status: 'ACTIVE',
        todos: [],
        users: [this.user.uid],
      };
      console.log('New team', teamData);
      this.createTeam(teamData);
    }
  }

  createTeam(teamData: TeamI): void {
    this.teamsService.createTeam(teamData);
    this.teamNameForm.setValue(null);
    this.teamNameForm.reset();
  }
}

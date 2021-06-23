import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { TeamI } from 'src/app/interfaces/TeamI';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(public afd: AngularFireDatabase) {
  }

  public createTeam(team:TeamI):void {
    this.afd.object('/teams').set(team);
  }

  public readUserTeams(userId:string): AngularFireList<TeamI> {
    return this.afd.list<TeamI>('/teams/users', (ref) => {
      return ref.orderByChild('id').equalTo(userId);
    });
  }
}

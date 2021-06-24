import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TeamI } from 'src/app/interfaces/TeamI';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(public afs: AngularFirestore) {}

  public createTeam(team: TeamI) {
    this.afs.collection('teams').add(team);
  }

  public readUserTeams(userId: string): Observable<TeamI[]> {
    return this.afs
        .collection<TeamI>('teams', (ref) => {
          return ref.where('users', 'array-contains', userId );
        })
        .valueChanges();
  }
}

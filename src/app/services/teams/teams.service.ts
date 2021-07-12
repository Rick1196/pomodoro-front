import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamI } from 'src/app/interfaces/TeamI';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(public afs: AngularFirestore) {}

  public createTeam(team: TeamI):Promise<DocumentReference<TeamI>> {
    return this.afs.collection<TeamI>('teams').add(team);
  }

  public readUserTeams(userId: string): Observable<TeamI[]> {
    return this.afs
        .collection<TeamI>('teams', (ref) => {
          return ref.where('users', 'array-contains', userId );
        })
        .snapshotChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ uid: c.payload.doc.id, ...c.payload.doc.data() })
            )
          )
        );
  }
}

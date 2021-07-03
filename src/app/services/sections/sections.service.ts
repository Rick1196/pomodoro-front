import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SectionI } from 'src/app/interfaces/section';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  constructor(public afs: AngularFirestore) {}

  public createSection(sections: SectionI) {
    this.afs.collection('sections').add(sections);
  }

  public readTeamSections(teamId: string): Observable<SectionI[]> {
    return this.afs
        .collection<SectionI>('sections', (ref) => {
          return ref.orderBy('dateCreated').where('teamId', '==', teamId );
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

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SectionI } from 'src/app/interfaces/section';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  constructor(public afs: AngularFirestore) {}

  public createSection(section: SectionI) {
    this.afs.collection('sections').add(section);
  }

  public deleteSection(section: SectionI):Promise<void> {
    return this.afs.collection('sections').doc(section.uid).delete();
  }

  public updateSection(section:SectionI):Promise<void>{
    return this.afs.collection('sections').doc(section.uid).update(section);
  }

  public updateSectionsIndex(sectionSelected:SectionI, sectionMoved: SectionI){
    const batch = firebase.firestore().batch();
    batch.update(this.afs.collection('sections').doc(sectionSelected.uid).ref, {
      index: sectionSelected.index
    });
    batch.update(this.afs.collection('sections').doc(sectionMoved.uid).ref, {
      index: sectionMoved.index
    });
    batch.commit();
  }

  public readTeamSections(teamId: string): Observable<SectionI[]> {
    return this.afs
        .collection<SectionI>('sections', (ref) => {
          return ref.orderBy('index').where('teamId', '==', teamId );
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

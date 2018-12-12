import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  public currentItem:string = '';

  constructor(
    private firestore: AngularFirestore
  ) {}

  public addDomain(data: {dList: string}) {
    return this.firestore.collection('domains').add(data);
  }

  public getDomain(documentId: string) {
    return this.firestore.collection('domains').doc(documentId).snapshotChanges();
  }

  public getDomains() {
    return this.firestore.collection('domains').snapshotChanges();
  }

  public updateDomains(documentId: string, data: any) {
    return this.firestore.collection('domains').doc(documentId).set(data);
  }
}

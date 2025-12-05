// src/app/services/reservation.service.ts

import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

// Interface a form és a Firestore adatokhoz
export interface ReservationData {
  date: string; // Pl.: '2025-12-24'
  time: string; // Pl.: '19:30'
  partySize: number;
  name: string;
  email: string;
  timestamp?: any; // Firestore serverTimestamp
}

// A ReservationComponent által használt slot interface
export interface ReservationSlot {
  time: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // Típusos deklaráció a Firebase hiba elkerülése végett
  private reservationsCollection: CollectionReference<
    ReservationData,
    DocumentData
  >;

  constructor(private firestore: Firestore) {
    // Típusos inicializálás: a collection() függvénynek átadjuk a ReservationData típust
    this.reservationsCollection = collection(
      this.firestore,
      'reservations'
    ) as CollectionReference<ReservationData, DocumentData>;
  }

  /**
   * Lekéri az összes már lefoglalt időpontot egy adott dátumra és asztalméretre.
   */
  getOccupiedSlots(
    date: string,
    partySize: number
  ): Observable<ReservationData[]> {
    const q = query(
      this.reservationsCollection,
      where('date', '==', date),
      where('partySize', '>=', partySize)
    );

    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        // A map belsejében megszűnik a hiba, mert a gyűjtemény típusos.
        return querySnapshot.docs.map((doc) => doc.data());
      })
    );
  }

  /**
   * Új foglalást hoz létre a Firestore-ban.
   */
  createReservation(data: ReservationData): Observable<any> {
    const reservationRecord: ReservationData = {
      ...data,
      timestamp: serverTimestamp(),
    };

    return from(addDoc(this.reservationsCollection, reservationRecord));
  }
}

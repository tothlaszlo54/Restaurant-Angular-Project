// src/app/reservation/reservation.component.ts

import {
  ReservationData,
  ReservationService,
} from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationSlot } from '../../services/reservation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  slots: ReservationSlot[] = [];
  partySizes = [1, 2, 3, 4, 5, 6, 7, 8];
  allTimes = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      date: ['', Validators.required],
      partySize: [1, Validators.required],
      // Név és Email mezők kötelezővé tétele
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    // Feliratkozás az űrlap változásaira
    this.reservationForm.valueChanges.subscribe(() => {
      // Csak akkor kérünk le slotokat, ha az űrlap érvényes
      if (this.reservationForm.valid) {
        this.loadAvailableSlots();
      } else if (
        this.reservationForm.get('date')?.valid &&
        this.reservationForm.get('partySize')?.valid
      ) {
        // Olyan eset, amikor a dátum/létszám OK, de a név/email hiányzik.
        // Hagyjuk futni, de a foglalás csak a teljes űrlap érvényességekor megy végbe.
        this.loadAvailableSlots();
      } else {
        this.slots = [];
      }
    });

    // Kezdeti slotok betöltése a mai napra
    const today = new Date().toISOString().substring(0, 10);
    this.reservationForm.get('date')?.setValue(today);
  }

  loadAvailableSlots(): void {
    const { date, partySize } = this.reservationForm.value;

    // Lekérés a Firebase-ből
    this.reservationService.getOccupiedSlots(date, partySize).subscribe({
      next: (occupiedSlots: ReservationData[]) => {
        const occupiedTimes = new Set(occupiedSlots.map((slot) => slot.time));

        this.slots = this.allTimes.map((time) => ({
          time,
          available: !occupiedTimes.has(time),
        }));
      },
      error: (err) => {
        console.error('Hiba a foglalások lekérdezésekor:', err);
        // Hiba esetén alapértelmezett, elérhető slotok
        this.slots = this.allTimes.map((time) => ({ time, available: true }));
      },
    });
  }

  bookSlot(slot: ReservationSlot): void {
    // Ellenőrizzük, hogy a slot elérhető ÉS a teljes űrlap érvényes (név, email is kitöltve!)
    if (!slot.available || this.reservationForm.invalid) {
      this.toastr.error(
        'Kérem válasszon elérhető időpontot, és töltse ki az összes mezőt (Név, Email)!'
      );
      return;
    }

    const reservationData: ReservationData = {
      ...this.reservationForm.value,
      time: slot.time,
    };

    // Foglalás rögzítése a Firebase-ben
    this.reservationService.createReservation(reservationData).subscribe({
      next: (docRef) => {
        this.toastr.success(
          `Foglalás sikeres! Azonosító: ${docRef.id}. Hamarosan email-t küldünk Önnek a foglalásról!`
        );
        slot.available = false; // Vizuálisan frissítjük a gombot

        // Visszaállítás, megtartva az éppen foglalt dátumot
        this.reservationForm.reset({
          partySize: reservationData.partySize,
          date: reservationData.date,
        });
        this.loadAvailableSlots(); // Újra betöltjük a slotokat a friss adatokkal
      },
      error: (err) => {
        console.error('Hiba a foglalás mentésekor:', err);
        this.toastr.error(
          'Hiba történt a foglalás közben. Kérem próbálja újra.'
        );
      },
    });
  }
}

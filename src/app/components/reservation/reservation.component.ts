import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationSlot } from '../../services/reservation.service';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      date: ['', Validators.required],
      partySize: [1, Validators.required],
    });

    this.reservationForm.valueChanges.subscribe((val) => {
      if (this.reservationForm.valid) {
        this.generateSlots();
      }
    });
  }

  generateSlots() {
    // Itt egyszerűen randomizáljuk, melyik slot szabad
    this.slots = this.allTimes.map((time) => ({
      time,
      available: Math.random() > 0.3, // 70% eséllyel elérhető
    }));
  }

  bookSlot(slot: ReservationSlot) {
    if (slot.available) {
      alert(
        `Reservation confirmed for ${slot.time} with party of ${this.reservationForm.value.partySize} on ${this.reservationForm.value.date}`
      );
      // Szimuláljuk, hogy a foglalás lefoglalja a slotot
      slot.available = false;
    }
  }
}

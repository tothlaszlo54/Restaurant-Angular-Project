import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ReservationSlot {
  time: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ReservationService {}

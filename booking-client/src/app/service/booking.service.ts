import { Injectable } from "@angular/core";
import { Booking } from "../model/booking.model";
import {v4 as uuidv4} from 'uuid';

@Injectable({
    providedIn: "root"
})
export class BookingService {
    bookingInfo: Booking[] = [
        new Booking(uuidv4(), new Date("2023-09-01T18:30"),
            new Date("2023-09-04T10:30")),
        new Booking(uuidv4(), new Date("2023-09-11T20:30"),
            new Date("2023-09-14T08:30")),
        new Booking(uuidv4(), new Date("2023-09-20T16:30"),
            new Date("2023-09-22T10:30"))
    ]

    getRoomList() {

    } 

    getBookingInfo(roomId: string = "", month: number | null =  null) {
        return this.bookingInfo;
    }

}
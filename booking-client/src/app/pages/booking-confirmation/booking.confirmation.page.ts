import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'booking-confirmation-page',
  templateUrl: './booking.confirmation.page.html',
  styleUrls: ['./booking.confirmation.page.sass'],
})
export class BookingConfirmationPage implements OnInit{
  fullDaysInMonth: Date[] = [];
  currentMonthFirstDate!: Date;
  selectedDate!: Date;
  @ViewChild("picker") picker!: ElementRef;
  bookingInfo: Booking[] = [];
  oneDayWidth = 8;
  roomColumnWidth = 9;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fullDaysInMonth = structuredClone(this.getDaysInMonth(
        new Date().getMonth(), new Date().getFullYear()
      ));
    
    this.currentMonthFirstDate = new Date();
    this.currentMonthFirstDate.setDate(1);
    
    this.bookingInfo = this.bookingService.getBookingInfo("",this.currentMonthFirstDate.getMonth());  

  }

  getStartPoint(booking: Booking) {
    const year = <number> booking.startDateTime?.getFullYear();
    const month = <number> booking.startDateTime?.getMonth();

    if(year !== this.currentMonthFirstDate.getFullYear() || month !== this.currentMonthFirstDate.getMonth()){
      return 0;
    }

    const startDateTime = booking.startDateTime;
    const date = <number> startDateTime?.getDate();
    const hour = <number> startDateTime?.getHours();
    const minute = <number> startDateTime?.getMinutes();

    return this.roomColumnWidth + (this.oneDayWidth * (date - 1)) + (((hour * 60 + minute)/(60 * 24)) * this.oneDayWidth);
  }

  getWidth(booking: Booking, startDatetimeLeft: number) {
    const year = <number> booking.startDateTime?.getFullYear();
    const month = <number> booking.startDateTime?.getMonth();

    if(year !== this.currentMonthFirstDate.getFullYear() || month !== this.currentMonthFirstDate.getMonth()){
      return 0;
    }

    const endDateTime = booking.endDateTime;
    const date = <number> endDateTime?.getDate();
    const hour = <number> endDateTime?.getHours();
    const minute = <number> endDateTime?.getMinutes();

    const endDateTimePoint = this.roomColumnWidth + (this.oneDayWidth * (date - 1)) + (((hour * 60 + minute)/(60 * 24)) * this.oneDayWidth);

    return endDateTimePoint - startDatetimeLeft;

  }
  
  previousMonth() {
    this.currentMonthFirstDate.setMonth(this.currentMonthFirstDate.getMonth()-1);
    this.fullDaysInMonth = structuredClone(this.getDaysInMonth(
      this.currentMonthFirstDate.getMonth(), this.currentMonthFirstDate.getFullYear()
    ));

    // Renew booking information of previous month
    this.bookingInfo = this.bookingService.getBookingInfo("",this.currentMonthFirstDate.getMonth());
  }

  nextMonth() {
    this.currentMonthFirstDate.setMonth(this.currentMonthFirstDate.getMonth()+1);
    this.fullDaysInMonth = structuredClone(this.getDaysInMonth(
      this.currentMonthFirstDate.getMonth(), this.currentMonthFirstDate.getFullYear()
    ));

    // Renew booking information of next month
    this.bookingInfo = this.bookingService.getBookingInfo("",this.currentMonthFirstDate.getMonth());
  }



  getDaysInMonth(month: number, year: number) : Date[]{
    let date = new Date(year, month, 1);
    const days = [];


    while (date.getMonth() === month){
      days.push(new Date(date));
      date.setDate(date.getDate() + 1)
    }

    return days;
  }

  
}

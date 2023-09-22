import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  ngOnInit(): void {
    this.fullDaysInMonth = structuredClone(this.getDaysInMonth(
        new Date().getMonth(), new Date().getFullYear()
      ));
    
    this.currentMonthFirstDate = new Date();
    this.currentMonthFirstDate.setDate(1);
  }
  
  previousMonth() {
    this.currentMonthFirstDate.setMonth(this.currentMonthFirstDate.getMonth()-1);
    this.fullDaysInMonth = structuredClone(this.getDaysInMonth(
      this.currentMonthFirstDate.getMonth(), this.currentMonthFirstDate.getFullYear()
    ));
  }

  nextMonth() {
    this.currentMonthFirstDate.setMonth(this.currentMonthFirstDate.getMonth()+1);
    this.fullDaysInMonth = structuredClone(this.getDaysInMonth(
      this.currentMonthFirstDate.getMonth(), this.currentMonthFirstDate.getFullYear()
    ));
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

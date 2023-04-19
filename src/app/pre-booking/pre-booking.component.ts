import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { Book } from '../book';

@Component({
  selector: 'app-pre-booking',
  templateUrl: './pre-booking.component.html',
  styleUrls: ['./pre-booking.component.css']
})
export class PreBookingComponent implements OnInit{
  constructor(private bookservice:BookingService) { }
  ngOnInit(): void {
    this.pastDate();
    this.futureDate();
  }

  min:any;
  max:any;

  pastDate(){
    var tdate = new Date();
    var date:any = tdate.getDate();
    if(date < 10){
      date ="0" + date;
    }
    var month:any = tdate.getMonth() + 1;
    if(month < 10){
      month ="0" + month;
    }
    var year:any = tdate.getFullYear();
    this.min = year + "-" + month + "-" + date;
    console.log(this.min);
    }

    futureDate(){
      var fdate:any = new Date();
      var todayDate:any = fdate.getDate();
      if(todayDate < 10){
        todayDate ="0" + todayDate;
      }
      var todayMonth:any = fdate.getMonth() + 4;
      if(todayMonth < 10){
        todayMonth ="0" + todayMonth;
      }
      var todayYear:any = fdate.getFullYear();
      this.max = todayYear + "-" + todayMonth + "-" + todayDate;
      console.log(this.max);


    }

  
  books:Book= new Book();
  
  bookinguser(){
    console.log(this.books);
    this.bookservice.pre(this.books).subscribe(data=>{
      alert("Successfully user is booked")
    },
    error=>("sorry user is not booked") );
    
  }

  
  

}

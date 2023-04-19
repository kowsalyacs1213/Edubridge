import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Payuser } from 'src/app/payuser';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private paymentservice:PaymentService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }

  
  // back end for payment
  puser:Payuser= new Payuser();
  
  paymentuser(){
    console.log(this.puser);
    this.paymentservice.registerUser(this.puser).subscribe(data=>{
      alert("Successfully user is ordered")
    },
    error=>("sorry user is not ordered") );
  }



}


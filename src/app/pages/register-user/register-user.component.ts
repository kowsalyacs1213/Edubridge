import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
signupUsers: any[]=[];
signupObj:any = {
  userName: '',
  email: '',
  password: ''
};
loginObj: any ={
  userName: '',  
  password: ''
};
onSignUp(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  this.signupObj = {
    userName: '',
    email: '',
    password: '',
  };


}
onLogin(){
  debugger
  const isUserExists = this.signupUsers.find(m => m.userName == this. loginObj.userName && m.password == this.loginObj.password);
   if(isUserExists === undefined){
    alert('User Login Successfully');
   }else{
    alert('Wrong Credentials');
   }
  

}





  
  
  constructor(private orderdetailsService:OrderDetailsService) { }
  ngOnInit(): void {
    const localData =localStorage.getItem('signUpUsers');
    if(localData !=null){
      this.signupUsers = JSON.parse(localData);
    }
     
  }
  
  user:User= new User();
  
  userRegister(){
    console.log(this.user);
    this.orderdetailsService.registerUser(this.user).subscribe(data=>{
      alert("Successfully user is registered")
    },
    error=>("sorry user is not registered") );
  }

}

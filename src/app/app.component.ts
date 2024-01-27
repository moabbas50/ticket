import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent  {
  checked!: boolean ;

constructor(private router:Router){

}

select(){
  if(this.checked==true){
    this.router.navigateByUrl("/English")
  }else{
    this.router.navigateByUrl("/")
  }

};

}

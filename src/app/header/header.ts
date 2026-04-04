import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private x : Router){}

  id = 50
  ngOnInit(){}

   logIn(){
     this.x.navigateByUrl(`/home?id=${this.id}`)
    //  this.x.navigate(["/home"],{
    //    queryParams :{
    //       id :10
    //    }
    //  })

  }
}

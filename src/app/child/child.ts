import { CurrencyPipe, DatePipe, LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [LowerCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {

  @Input() btnText = ""

  @Output() sendInfoFromChild = new EventEmitter()


  sendinforToParent(){
    this.sendInfoFromChild.emit("ok")
  }

  text = "TEXT"

  date = new Date()

  amount = 100

  convert(tetxt : string){
    return tetxt.trim()
  }

}


// for if      -  სტრუქტურული დირექტივა 


// @if(){

// }

// @for(){

// }


//   ngClass ngStyle  ატრიბუტ დირექტივები
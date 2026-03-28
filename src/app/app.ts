import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from './home/home';
import { Restaurant } from './restaurant/restaurant';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home, Restaurant],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {


}




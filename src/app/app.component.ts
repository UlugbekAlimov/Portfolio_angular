import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isSplashVisible = true;
  textClass = 'focus-in-expand';
  splashScreenClass = '';

  ngOnInit() {
    setTimeout(() => {
      this.textClass = 'blur-out-contract';
    }, 2000); 

    setTimeout(() => {
      this.splashScreenClass = 'fade-out';
    }, 3000); 

    setTimeout(() => {
      this.isSplashVisible = false;
    }, 3500);  
  }
}
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isMenuVisible: boolean = false;

  ngOnInit(): void {
    this.updateMenuVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMenuVisibility();
  }

  private updateMenuVisibility() {
    const screenWidth = window.innerWidth;
    this.isMenuVisible = screenWidth >= 768;
  }
}

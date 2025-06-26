import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shared-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shared-navbar.component.html',
  styleUrl: './shared-navbar.component.css'
})
export class SharedNavbarComponent implements OnInit {
  title: string = 'Akiro ($AKR)'; // Hard-coded default
  mobileMenuOpen = false;

  constructor() {
    console.log('Navbar constructor - Original title:', this.title);
    console.log('Navbar constructor - environment object:', environment);
    
    // Try to get the app name from environment if it exists
    if (environment && environment.appName) {
      this.title = environment.appName;
      console.log('Navbar constructor - Updated title from env:', this.title);
    }
  }
  
  ngOnInit() {
    console.log('Navbar ngOnInit - Original title:', this.title);
    
    // Try again in ngOnInit in case environment is loaded later
    if (environment && environment.appName) {
      this.title = environment.appName;
      console.log('Navbar ngOnInit - Updated title from env:', this.title);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu(); // Optionally close mobile menu after scroll
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}

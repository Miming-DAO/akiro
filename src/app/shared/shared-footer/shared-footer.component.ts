import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shared-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shared-footer.component.html',
  styleUrl: './shared-footer.component.css'
})
export class SharedFooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  appName: string = 'Akiro Coin'; // Hard-coded default
  socialLinks = {
    twitter: 'https://twitter.com/akirocoin',
    github: 'https://github.com/akirocoin',
    linkedin: 'https://linkedin.com/company/akirocoin',
    youtube: 'https://youtube.com/akirocoin'
  };
  
  constructor() {
    console.log('Footer constructor - Original appName:', this.appName);
    console.log('Footer constructor - environment object:', environment);
    
    // Try to get the app name from environment if it exists
    if (environment && environment.appName) {
      this.appName = environment.appName;
      console.log('Footer constructor - Updated appName from env:', this.appName);
    }
    
    // Try to get social links from environment if they exist
    if (environment && environment.socialMedia) {
      this.socialLinks = environment.socialMedia;
      console.log('Footer constructor - Updated socialLinks from env');
    }
  }
  
  ngOnInit() {
    console.log('Footer ngOnInit - Original appName:', this.appName);
    
    // Try again in ngOnInit in case environment is loaded later
    if (environment && environment.appName) {
      this.appName = environment.appName;
      console.log('Footer ngOnInit - Updated appName from env:', this.appName);
    }
    
    // Try to get social links from environment again
    if (environment && environment.socialMedia) {
      this.socialLinks = environment.socialMedia;
      console.log('Footer ngOnInit - Updated socialLinks from env');
    }
  }
}

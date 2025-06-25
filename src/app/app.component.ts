import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { SharedNavbarComponent } from './shared/shared-navbar/shared-navbar.component';
/* import { SharedFooterComponent } from './shared/shared-footer/shared-footer.component'; */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedNavbarComponent, /* SharedFooterComponent */],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = environment.appName || 'Akiro-Coin';
  environmentName = '';
  apiUrl = '';
  
  ngOnInit() {
    // Access environment variables
    this.environmentName = environment.production 
      ? 'Production' 
      : environment.test 
        ? 'Test' 
        : 'Development';
    
    this.apiUrl = environment.apiUrl;
    
    console.log('Current environment:', this.environmentName);
    console.log('API URL:', this.apiUrl);
    console.log('Full environment config:', environment);
  }
}

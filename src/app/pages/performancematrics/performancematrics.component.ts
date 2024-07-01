import { Component } from '@angular/core';

@Component({
  selector: 'app-performancematrics',
  templateUrl: './performancematrics.component.html',
  styleUrl: './performancematrics.component.css'
})
export class PerformancematricsComponent {
  isUserVisible: boolean = false;
    
  toggleUserInfoVisibility(): void {
    this.isUserVisible = !this.isUserVisible;
  }
}

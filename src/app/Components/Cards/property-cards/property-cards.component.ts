import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Properties } from '../../../Model/Properties/properties';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
=======
import { Router, RouterModule } from '@angular/router';
>>>>>>> 8b49a6c5d87ec60511d5d4a447878469d7e2e2cd

@Component({
  selector: 'app-property-cards',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterLink],
=======
  imports: [CommonModule, RouterModule],
>>>>>>> 8b49a6c5d87ec60511d5d4a447878469d7e2e2cd
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent {
<<<<<<< HEAD
  @Input() property! :Properties;
  
  constructor(private router:RouterLink){  }
  
  navegate(){this.router.routerLink;}
  
  
=======
  @Input() property!: Properties;

  constructor(private router: Router) {} 

  navigateToPropertyDetails() {
    this.router.navigate(['/property-view', this.property.id]);
  }
>>>>>>> 8b49a6c5d87ec60511d5d4a447878469d7e2e2cd
}

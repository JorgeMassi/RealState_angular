import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Properties } from '../../../Model/Properties/properties';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent {
  @Input() property!: Properties;

  constructor(private router: Router) {} 

  navigateToPropertyDetails() {
    this.router.navigate(['/property-view', this.property.id]);
  }
}

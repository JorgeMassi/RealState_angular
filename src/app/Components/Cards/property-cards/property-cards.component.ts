import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Properties } from '../../../Model/Properties/properties';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-cards',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-cards.component.html',
  styleUrl: './property-cards.component.css'
})
export class PropertyCardsComponent {
  @Input() property! :Properties;
  
  constructor(private router:RouterLink){  }
  
  navegate(){this.router.routerLink;}
  
  
}

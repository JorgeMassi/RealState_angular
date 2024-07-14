import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Properties } from '../../../Model/Properties/properties';

@Component({
  selector: 'app-property-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-cards.component.html',
  styleUrl: './property-cards.component.css'
})
export class PropertyCardsComponent {
  @Input() properties! :Properties

}

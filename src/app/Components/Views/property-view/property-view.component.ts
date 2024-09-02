import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Properties } from '../../../Model/Properties/properties';

@Component({
  selector: 'app-property-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-view.component.html',
  styleUrl: './property-view.component.css'
})
export class PropertyViewComponent {
  prop:Properties= new Properties();

}

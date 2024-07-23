import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyCardsComponent } from '../../Cards/property-cards/property-cards.component';
import { Properties } from '../../../Model/Properties/properties';
import { PropertyServiceService } from '../../../Service/PropertyService/property-service.service';

@Component({
  selector: 'app-properties-list',
  standalone: true,
  imports: [CommonModule, PropertyCardsComponent],
  templateUrl: './properties-list.component.html',
  styleUrl: './properties-list.component.css'
})
export class PropertiesListComponent {

  properties = new Array<Properties>();

  constructor(private service: PropertyServiceService) { }

  ngOnInit() {
    this.service.getProperties().subscribe({
      next: (data) => this.properties = data,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
}

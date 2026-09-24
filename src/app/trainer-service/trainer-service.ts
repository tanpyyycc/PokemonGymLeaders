import { Component } from '@angular/core';
import { Injectable, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-trainer-service',
  styleUrl: './trainer-service.css',
  templateUrl: './trainer-service.html',
})
export class TrainerService {
  private registry = signal([
    {
      name: 'Ash Ketchum',
      team: ['Pikachu', 'Charizard'],
      items: ['Light Ball', 'Charizardite Y']
    },
    {
      name: 'Misty',
      team: ['Starmie', 'Psyduck', 'Gyarados'],
      items: ['Mystic Water', 'Gyaradosite']
    },
    {
      name: 'Dawn',
      team: ['Piplup', 'Pachirisu', 'Mamoswine', 'Quilava', 'Togekiss'],
      items: ['None']
    },
    {
      name: 'Serena',
      team: ['Delphfox', 'Panchan', 'Sylveon'], 
      items: ['Focus Sash']
    },
    {
      name: 'Clement',
      team: ['Luxray', 'Chespin'],
      items: 'None'
    }
  ]); 
    
  trainers = this.registry.asReadonly();
}

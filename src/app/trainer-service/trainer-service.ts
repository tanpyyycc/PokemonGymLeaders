import { Component } from '@angular/core';
import { Injectable, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-trainer-service',
  styleUrl: './trainer-service.css',
  templateUrl: './trainer-service.html',
})
export class TrainerService {
 private hoennGymLeaders = signal([
    {
      name: 'Roxanne',
      age: 23,
      badge: 'Stone Badge',
      town: 'Rustboro City',
      team: [{name: 'Geodude', level: 14},{name: 'Nosepass', level: 15}],
      specialty: 'Rock Type'

    },
    {
      name: 'Brawly',
      age: 30,
      badge: 'Knuckle Badge',
      town: 'Dewford Town',
      team: [{name: 'Machop', level: 17},{name: 'Makuhita', level: 18}],
      specialty: 'Fighting Type'

    },
    {
      name: 'Wattson',
      age: 24,
      badge: 'Dynamo Badge',
      town: 'Mauville City',
      team: [{name: 'Magnemite', level: 22}, {name: 'Voltorb', level: 20}, {name: 'Magneton', level: 23}],
      specialty: 'Electric Type'

    },
    {
      name: 'Flannery',
      age: 17,
      badge: 'Heat Badge',
      town: 'Lavaridge Town',
      team: [{name: 'Slugma', level: 26}, {name: 'Slugma', level: 26}, {name: 'Torkoal', level: 28}],
      specialty: 'Fire Type'

    },
    {
      name: 'Norman',
      age: 50,
      badge: 'Balance Badge',
      town: 'Petalburg City',
      team: [{name: 'Slaking', level: 28}, {name: 'Vigoroth', level: 30}, {name: 'Slaking', level: 31}],
      specialty: 'Normal Type'

    },
    {
      name: 'Winona',
      age: 34,
      badge: 'Feather Badge',
      town: 'Fortree City',
      team: [{name: 'Swellow', level: 31}, {name: 'Pelipper', level: 30}, {name: 'Skarmony', level: 32}, {name: 'Altaria', level: 33}],
      specialty: 'Flying Type'

    },
    {
      name: 'Tate and Liza',
      age: 18,
      badge: 'Mind Badge',
      town: 'Mossdeep City',
      team: [{name: 'Lunatone', level: 42}, {name: 'Solrock', level: 42}],
      specialty: 'Psychic Type'

    },
    {
      name: 'Wallace',
      age: 24,
      badge: 'Rain Badge',
      town: 'Sootopolis City',
      team: [{name: 'Luvdisc', level: 40}, {name: 'Whiscash', level: 42}, {name: 'Sealeo', level: 40}, {name: 'Crawdaunt', level: 43}, {name: 'Milotic', level: 43}],
      specialty: 'Water Type'

    },
    
  ]); 
  public hoeenleaders = computed(() => this.hoennGymLeaders());
}

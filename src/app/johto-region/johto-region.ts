import { Component } from '@angular/core';
import { GymLeader } from '../kanto-region/kanto-region';
import { LeaderInfo } from '../leader-info/leader-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-johto-region',
  standalone: true,
  imports: [CommonModule, LeaderInfo],
  templateUrl: './johto-region.html',
  styleUrl: './johto-region.css',
  template: `
    <h2>Johto Region</h2>
    <app-leader-info 
      *ngFor="let leader of johto-region" 
      [leader]="leader" 
      (showMonologue)="displayAlert($event)">
    </app-leader-info>
  `
})
export class JohtoRegion {
  leaders: GymLeader[] = [
    {
      name: 'Falkner',
    age: 18,
    badge: 'Zephyr Badge',
    location: 'Violet City',
    typeColor: '#4ca6ff', // Flying
    intro: 'The Elegant Master of Flying Pokémon.',
    team: [{ name: 'Pidgey', level: 7 }, { name: 'Pidgeotto', level: 9 }],
    monologue: "I'll show you the real power of flying-type Pokémon that my father taught me! Winds, carry us to victory!",
    description: "The young leader of Violet City Gym, keeping his father's legacy alive through aerial combat.",
    motto: "Soar higher than anyone else on the wings of freedom!"
  },
  {
    name: 'Bugsy',
    age: 14,
    badge: 'Hive Badge',
    location: 'Azalea Town',
    typeColor: '#8cb820', // Bug
    intro: 'The Walking Bug Pokémon Encyclopedia.',
    team: [{ name: 'Metapod', level: 14 }, { name: 'Kakuna', level: 14 }, { name: 'Scyther', level: 17 }],
    monologue: "I'm Bugsy! I researched bug Pokémon extensively, and nobody knows more about their tactical versatility than I do!",
    description: "A youthful genius researcher specializing in complex bug-type swarm patterns and evolutions.",
    motto: "Small bugs can achieve mighty things through teamwork!"
  },
  {
    name: 'Whitney',
    age: 15,
    badge: 'Plain Badge',
    location: 'Goldenrod City',
    typeColor: '#ff80bf', // Normal
    intro: 'The Inimitable Goldenrod Beauty.',
    team: [{ name: 'Clefairy', level: 18 }, { name: 'Miltank', level: 20 }],
    monologue: "Hi! Do you want to battle? My Pokémon are super cute and very strong, so don't underestimate us or you'll regret it!",
    description: "The cheerful Goldenrod gym leader famous for her deceptively powerful Miltank rollout strategy.",
    motto: "Cutest looks, toughest defense!"
  },
  {
    name: 'Morty',
    age: 20,
    badge: 'Fog Badge',
    location: 'Ecruteak City',
    typeColor: '#6b3d99', // Ghost
    intro: 'The Mystic Seer of Ghosts.',
    team: [{ name: 'Gastly', level: 21 }, { name: 'Haunter', level: 21 }, { name: 'Haunter', level: 23 }, { name: 'Gengar', level: 25 }],
    monologue: "Welcome... Ecruteak is a city of history. Can you pierce through the veil of fog and face the spectral world?",
    description: "A solemn trainer deeply connected to the Burned Tower and legendary spectral beasts.",
    motto: "What is seen is fleeting; what lies beyond the veil is eternal."
  },
  {
    name: 'Chuck',
    age: 38,
    badge: 'Storm Badge',
    location: 'Cianwood City',
    typeColor: '#b84d00', // Fighting
    intro: 'Fierce and Passionate Fighter.',
    team: [{ name: 'Primeape', level: 27 }, { name: 'Poliwrath', level: 30 }],
    monologue: "Wahahaha! Training under crashing ocean waves hardens both body and soul! Let's see your fighting spirit!",
    description: "A high-energy martial artist who trains relentlessly alongside his fighting-type partners near the ocean spray.",
    motto: "A strong body houses an indomitable fighting spirit!"
  },
  {
    name: 'Jasmine',
    age: 19,
    badge: 'Mineral Badge',
    location: 'Olivine City',
    typeColor: '#80a8b8', // Steel
    intro: 'The Steel-Hearted Maiden.',
    team: [{ name: 'Magnemite', level: 30 }, { name: 'Magnemite', level: 30 }, { name: 'Steelix', level: 35 }],
    monologue: "Um... hello. I protect the lighthouse, but I also test challengers. Steel-type Pokémon are unyielding, yet gentle.",
    description: "A kind-hearted protector of Olivine Lighthouse who commands unyielding steel defense with serene grace.",
    motto: "Gentle in spirit, unbreakable in defense."
  },
  {
    name: 'Pryce',
    age: 70,
    badge: 'Glacier Badge',
    location: 'Mahogany Town',
    typeColor: '#3399ff', // Ice
    intro: 'The Winter-Seasoned Veteran.',
    team: [{ name: 'Seel', level: 27 }, { name: 'Dewgong', level: 29 }, { name: 'Piloswine', level: 31 }],
    monologue: "Ah, youth. My ice training spans decades, withstanding blizzards and freezing cold. Show me what your heart is made of.",
    description: "An elderly veteran trainer whose calm experience and ice-type resilience match the biting winter frost.",
    motto: "Endure the harshest frost to forge true wisdom."
  },
  {
    name: 'Clair',
    age: 22,
    badge: 'Rising Badge',
    location: 'Blackthorn City',
    typeColor: '#1a43bf', // Dragon
    intro: 'The Blessed User of Dragon-Type Pokémon.',
    team: [{ name: 'Dragonair', level: 37 }, { name: 'Dragonair', level: 37 }, { name: 'Dragonair', level: 37 }, { name: 'Kingdra', level: 40 }],
    monologue: "I am Clair! The world's best dragon master! If you want the Rising Badge, you'll have to survive the wrath of dragons!",
    description: "Blackthorn's elite dragon expert, proud, fierce, and standing near the absolute peak of dragon mastery.",
    motto: "Only absolute dragon might can conquer the skies."
  }
];
}
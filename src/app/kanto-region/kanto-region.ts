import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { CommonModule } from '@angular/common';

export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  age: number;
  badge: string;
  location: string;
  typeColor: string; 
  intro: string;
  team: Pokemon[];
  monologue: string;
  description: string;
  motto: string;
}

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [CommonModule, LeaderInfo],
  templateUrl: './kanto-region.html',
  styleUrl: './kanto-region.css',
  template: `
    <h2>Kanto Region</h2>
    <app-leader-info 
      *ngFor="let leader of kanto-region" 
      [leader]="leader" 
      (showMonologue)="displayAlert($event)">
    </app-leader-info>
  `
})
export class KantoRegion {
  leaders: GymLeader[] = [
    {
      name: 'Brock',
      age: 15,
      badge: 'Boulder Badge',
      location: 'Pewter City',
      typeColor: '#8b8580', // Grey (Rock)
      intro: 'The Rock-Solid Pokémon Trainer.',
      team: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }],
      monologue: "Im Brock! Im Pewter's Gym Leader! That's why my Pokémon are all the Rock-type! Do you still want to challenge me? Fine then! Show me your best!",
      description: "The First Gym Leader within Pewter City, known for his Rock/Ground Type Team, one of Ash's known companions and older figure in the Series",
      motto: "I believe in rock hard defense and determination!" 
    },
    {
      name: 'Misty',
      age: 14,
      badge: 'Cascade Badge',
      location: 'Cerulean City',
      typeColor: '#2b91d2', // Blue (Water)
      intro: 'The Tomboyish Mermaid.',
      team: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }],
      monologue:"Hi, you're a new face! Trainers who want to turn pro have to have a policy about Pokémon! What is your approach when you catch Pokémon? My policy is an all-out offensive with Water-type Pokémon!",
      description: "The Water Type Gym Leader of the Cerulean Gym, Misty, has a bubbly yet fiery attitude outside the battlefield, another of Ash's companions that really messes with him and always carries Psyduck around.",
      motto: "My policy is an all-out offensive with Water-type Pokémon!" 
    },
    {
      name: 'Lt. Surge',
      age: 34,
      badge: 'Thunder Badge',
      location: 'Vermilion City',
      typeColor: '#d9a710', // Yellow (Electric)
      intro: 'The Lightning American.',
      team: [{ name: 'Voltorb', level: 21 }, { name: 'Pikachu', level: 18 }, { name: 'Raichu', level: 24 }],
      monologue: "Hey, kid! What do you think you're doing here? You won't live long in combat! That's for sure! I tell you kid, electric Pokémon saved me during the war! They zapped my enemies into paralysis! The same as I'll do to you!",
      description: "A Lieutenant who survived during the Pokemon War, uses Electric type pokemon to power his planes and was saved by the same type back then. Now as a Gym Leader, he installed a series of traps in the Gym. He takes a liking to Trainers with a lot of guts.",
      motto: "Strength and Determination"
    },
    {
      name: 'Erika',
      age: 20,
      badge: 'Rainbow Badge',
      location: 'Celadon City',
      typeColor: '#3a9e3d', // Green (Grass)
      intro: 'The Nature-Loving Princess.',
      team: [{ name: 'Victreebel', level: 29 }, { name: 'Tangela', level: 24 }, { name: 'Vileplume', level: 29 }],
      monologue: "Lovely weather, isn't it? It's so pleasant... Oh, gracious me! I'm terribly sorry, I didn't notice you arrive. Welcome to the Celadon Gym.",
      description: "A gentle lover of plants and flower arranging, but don't let her polite demeanor fool you in battle.",
      motto:"Grace and beauty can bloom even on the battlefield."
    },
    {
      name: 'Koga',
    age: 25,
    badge: 'Soul Badge',
    location: 'Fuchsia City',
    typeColor: '#8b3db8', // Poison
    intro: 'The Poisonous Ninja Master.',
    team: [{ name: 'Koffing', level: 37 }, { name: 'Muk', level: 39 }, { name: 'Koffing', level: 37 }, { name: 'Weezing', level: 43 }],
    monologue: "Fwahahaha! Excellent, challenger! Step into the shadows of my ninja gym and test your resilience against toxic arts!",
    description: "A master of ninja techniques who uses insidious poison-type strategies to wear down opponents.",
    motto: "Strike unseen, and let poison finish the task."
  },
  {
    name: 'Sabrina',
    age: 34,
    badge: 'Marsh Badge',
    location: 'Saffron City',
    typeColor: '#d94b8c', // Psychic
    intro: 'The Master of Psychic Pokémon.',
    team: [{ name: 'Kadabra', level: 38 }, { name: 'Mr. Mime', level: 37 }, { name: 'Venomoth', level: 38 }, { name: 'Alakazam', level: 43 }],
    monologue: "I have had a vision of your arrival. You seek the Marsh Badge. But psychic power is absolute—can you alter your destiny?",
    description: "Possesses formidable psychic powers that allow her to bend objects and foresee outcomes.",
    motto: "Mind over matter; reality bends to the will."
  },
  {
    name: 'Blaine',
    age: 43,
    badge: 'Volcano Badge',
    location: 'Cinnabar Island',
    typeColor: '#d93b2b', // Fire
    intro: 'The Hot-Headed Quiz Master.',
    team: [{ name: 'Growlithe', level: 42 }, { name: 'Ponyta', level: 40 }, { name: 'Rapidash', level: 42 }, { name: 'Arcanine', level: 47 }],
    monologue: "Hah! I'm Blaine, the hot-headed quiz master of Cinnabar Island! Can your fiery spirit melt through my riddles and flames?",
    description: "An eccentric scientist running a blazing gym out of Cinnabar Island, testing both wits and fire-type resilience.",
    motto: "Burn bright, think fast, and never extinguish your passion!"
  },
  {
    name: 'Giovanni',
    age: 50,
    badge: 'Earth Badge',
    location: 'Viridian City',
    typeColor: '#7a5230', // Ground
    intro: 'Leader of Team Rocket.',
    team: [{ name: 'Rhyhorn', level: 45 }, { name: 'Dugtrio', level: 42 }, { name: 'Nidoqueen', level: 44 }, { name: 'Nidoking', level: 45 }, { name: 'Rhydon', level: 50 }],
    monologue: "So, you've reached the final gym. I am Giovanni, the Viridian Gym Leader... and the head of Team Rocket. Witness absolute ground-type supremacy.",
    description: "The ultimate Kanto gym leader and criminal syndicate boss, wielding unyielding ground-type power.",
    motto: "Power is everything. Only absolute strength rules."
  }
];
}
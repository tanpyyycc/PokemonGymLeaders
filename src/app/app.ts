import { Component } from '@angular/core';
import { KantoRegion } from './kanto-region/kanto-region';
import { JohtoRegion } from './johto-region/johto-region';
import { HoennRegion } from './hoenn-region/hoenn-region';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, KantoRegion, JohtoRegion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentRegion: 'kanto' | 'johto' | 'hoenn'= 'kanto';

  selectRegion(region: 'kanto' | 'johto' | 'hoenn') {
    this.currentRegion = region;
  }
}
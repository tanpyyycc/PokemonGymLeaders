import { Component } from '@angular/core';
import { Injectable, signal } from '@angular/core';
import { GymLeader } from '../kanto-region/kanto-region';
import { TrainerService } from './trainer-service.'

@Component({
  imports: [CommonModule, TrainerService],
  selector: 'app-hoenn-region',
  styleUrl: './hoenn-region.css',
  templateUrl: './hoenn-region.html',
})
export class HoennRegion {
 private leaderService = inject(HoennGymLeaders);
 public leaders = this.leaderService.gymLeaders; 
}

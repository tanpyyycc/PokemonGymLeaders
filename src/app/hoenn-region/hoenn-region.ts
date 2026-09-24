import { Component, inject } from '@angular/core';
import { Injectable, signal } from '@angular/core';
import { GymLeader } from '../kanto-region/kanto-region';
import { TrainerService } from '../trainer-service/trainer-service'
import { CommonModule } from '@angular/common';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [CommonModule, LeaderInfo],
  selector: 'app-hoenn-region',
  styleUrl: './hoenn-region.css',
  templateUrl: './hoenn-region.html',
})
export class HoennRegion {
 private trainerService = inject(TrainerService);
 public leaders = this.trainerService.hoeenleaders; 
}

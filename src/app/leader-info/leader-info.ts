import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GymLeader } from '../kanto-region/kanto-region';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-leader-info',
  styleUrl: './leader-info.css',
  templateUrl: './leader-info.html',
})
export class LeaderInfo {
  @Input() GymLeader!: GymLeader;
  @Output() showMonologue = new EventEmitter<string>();

  isOpen: boolean = false;

  onToggleMonologue(){
    this.isOpen = !this.isOpen;
    this.showMonologue.emit(this.GymLeader.name);
  }
}


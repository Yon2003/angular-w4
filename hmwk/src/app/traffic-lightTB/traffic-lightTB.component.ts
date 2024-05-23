import { Component, Input, OnInit, SimpleChanges, OnChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-traffic-lightTB',
  templateUrl: './traffic-lightTB.component.html',
  styleUrls: ['./traffic-lightTB.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TrafficLightComponentTB implements OnInit, OnChanges {
  @Input() avaria: boolean = false;

  @Input() isRedOn: boolean = false;
  isYellowOn: boolean = false;
  @Input() isGreenOn: boolean = false;
  intervalId: any;
  blinkIntervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startTrafficLights();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['avaria'] && !changes['avaria'].firstChange) {
      if (this.avaria) {
        this.startBlinking();
      } else {
        this.stopBlinking();
        this.startTrafficLights();
      }
    }
  }

  startTrafficLights(): void {
    this.stopTrafficLights(); // Clear any existing intervals
    this.isRedOn = true;
    this.intervalId = setTimeout(() => {
      this.isRedOn = false;
      this.isYellowOn = true;
      this.intervalId = setTimeout(() => {
        this.isYellowOn = false;
        this.isGreenOn = true;
        this.intervalId = setTimeout(() => {
          this.isGreenOn = false;
          this.isYellowOn = true;
          this.intervalId = setTimeout(() => {
            this.isYellowOn = false;
            this.startTrafficLights();
          }, 2000);
        }, 5000);
      }, 2000);
    }, 5000);
  }

  stopTrafficLights(): void {
    if (this.intervalId) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
    this.isRedOn = false;
    this.isYellowOn = false;
    this.isGreenOn = false;
  }

  startBlinking(): void {
    this.stopTrafficLights();
    this.isYellowOn = true;
    this.blinkIntervalId = setInterval(() => {
      this.isYellowOn = !this.isYellowOn;
    }, 500);
  }

  stopBlinking(): void {
    if (this.blinkIntervalId) {
      clearInterval(this.blinkIntervalId);
      this.blinkIntervalId = null;
    }
    this.isYellowOn = false;
  }

  checkAndAlertYellow(): void {
    if (this.isYellowOn) {
      alert('Incorrect crossing');
    }
  }
}

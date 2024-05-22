import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-traffic-lightlr',
  templateUrl: './traffic-lightlr.component.html',
  styleUrls: ['./traffic-lightlr.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TrafficLightComponentLR implements OnInit {

  @Input() avaria: boolean = false;

  isRedOn: boolean = false;
  isYellowOn: boolean = false;
  isGreenOn: boolean = false;

  constructor() { }

  normalCycle: any;

  ngOnInit(): void {
    this.startTrafficLights();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['avaria'].currentValue === true) {
  //     this.triggerAvaria();
  //   }
  // }
  stopTrafficLights(): void {
    clearInterval(this.normalCycle);
  }

  // triggerAvaria(): void {
  //   this.stopTrafficLights();
  //   this.isRedOn = false;
  //   this.isYellowOn = true;
  //   this.isGreenOn = false;

  //   setTimeout(() => {
  //     console.log("asdasdaf")
  //     this.isYellowOn = false;
  //     this.startTrafficLights();
  //   }, 5000);
  // }

  startTrafficLights(): void {
    // this.normalCycle = setInterval(() => {
    this.isGreenOn = true;
    setTimeout(() => {
      this.isGreenOn = false;
      this.isYellowOn = true;
      setTimeout(() => {
        this.isYellowOn = false;
        this.isRedOn = true;
        setTimeout(() => {
          this.isRedOn = false;
          this.isYellowOn = true;
          setTimeout(() => {
            this.isYellowOn = false;
            this.startTrafficLights();
          }, 2000);
        }, 5000);
      }, 2000);
    }, 5000);
  // }, 5050);
  }
  checkAndAlertYellow(): void {
    if (this.isYellowOn) {
      alert('Incorrect crossing');
    }
  }
}

import { CommonModule } from "@angular/common";
import { Component,Input, OnInit, SimpleChanges} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-traffic-lightTB',
    templateUrl:'./traffic-lightTB.component.html',
    styleUrls:['./traffic-lightTB.component.css'],
    standalone:true,
    imports     : [FormsModule,CommonModule]
})
export class TrafficLightComponentTB implements OnInit{
    @Input() avaria: boolean = false;

    @Input() isRedOn: boolean = false;
    isYellowOn: boolean = false;
    @Input() isGreenOn: boolean = false;

    normalCycle: any;

    constructor() { }
  
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

  // клиерни интервала 
  startTrafficLights(): void {
      this.isRedOn = true;
      setTimeout(() => {
        this.isRedOn = false;
        this.isYellowOn = true;
        setTimeout(() => {
          this.isYellowOn = false;
          this.isGreenOn = true;
          setTimeout(() => {
            this.isGreenOn = false;
            this.isYellowOn = true;
            setTimeout(() => {
              this.isYellowOn = false;
              this.startTrafficLights();
            }, 2000);
          }, 5000);
        }, 2000);
      }, 5000);
  }
    checkAndAlertYellow(): void {
      if (this.isYellowOn) {
        alert('Incorrect crossing');
      }
    }


}
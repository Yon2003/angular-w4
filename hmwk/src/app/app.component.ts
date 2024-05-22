import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponentLR } from './traffic-lightlr/traffic-lightlr.component';
import { TrafficLightComponentTB } from './traffic-lightTB/traffic-lightTB.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
            FormsModule, 
            CommonModule,
            TrafficLightComponentLR,
            TrafficLightComponentTB]
})

export class AppComponent {
    // avaria: boolean = false;
    // avaria1: boolean = false;

    // triggerAvaria() {
    //   this.avaria = true;
    //   setTimeout(() => {
    //     this.avaria = false;
    //   }, 5050);
    // }
    // triggerAvaria1() {
    //     this.avaria1 = true;
    //     setTimeout(() => {
    //       this.avaria1 = false;
    //     }, 5050);
    //   }
}

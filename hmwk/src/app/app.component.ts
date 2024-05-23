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
    avaria: boolean = false;
    isButtonDisabled: boolean = false;
  
    triggerAvaria() {
      this.avaria = true;
      this.isButtonDisabled = true;
  
      setTimeout(() => {
        this.avaria = false;
  
        setTimeout(() => {
          this.isButtonDisabled = false;
        }, 10000);
      }, 10000);
    }
  }

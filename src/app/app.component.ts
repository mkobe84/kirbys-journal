import { Component } from '@angular/core';
import { PredictionEvent } from './prediction-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'at-alternative-interaction-solution';
  gesture: String = "";

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    if (this.gesture == "Two Hands Pointing") {
      document.getElementById("link1")!.click();
    } else if (this.gesture == "Hand Pointing") {
      document.getElementById("link2")!.click();
    } else if (this.gesture == "Closed Hand") {
      document.getElementById("newEntry")!.click();
    } else if (this.gesture == "Open Hand") {
      document.getElementById("createEntry")!.click();
    } else if (this.gesture == "Two Open Hands") {
      document.getElementById("showEntries")!.click();
    } else if (this.gesture == "Two Closed Hands") {
      document.getElementById("hidden")!.click();
    } else if (this.gesture == "One Open One Closed") {
      document.getElementById("bmBtn")!.click();
    } else if(this.gesture == "One Pointing One Closed") {
      document.getElementById("dateButton")!.click();
    }
  }

}
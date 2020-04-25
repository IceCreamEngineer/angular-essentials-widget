import { Component } from "@angular/core";
import { random } from "lodash";

// declare var _: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-essentials";
  rootName = "Matthew";
  rootItems = ["Apples", "Bananas", "Cherries"];
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemAdded(addedItem) {
    this.rootItems.push(addedItem);
    console.log(this.rootItems);
  }

  onIncrease() {
    // this.number++;
    this.number = random(1, 10);
  }
}

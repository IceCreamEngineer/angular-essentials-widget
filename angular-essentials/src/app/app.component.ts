import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-essentials";
  rootName = "Matthew";
  rootItems = ["Apples", "Bananas", "Cherries"];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemAdded(addedItem) {
    this.rootItems.push(addedItem);
    console.log(this.rootItems);
  }
}

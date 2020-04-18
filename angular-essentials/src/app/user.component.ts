import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <div>
      <strong>I'm the user component</strong>
    </div>
    <div>
      <p>My user:</p>
      <input type="text" (input)="onUserInput($event)" [value]="name" />
    </div>
    <!-- <input type="text" id="unique2" [(ngModel)]="name" /> -->
    <p>Hello {{ name }}!</p>
    <!-- <app-user-detail></app-user-detail> -->
  `,
})
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}

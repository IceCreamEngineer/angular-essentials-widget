import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name" />
    <!-- <input type="text" id="unique2" [(ngModel)]="name" /> -->
    <p>Hello {{ name }}!</p>
    <strong>I'm the user component</strong>
    <app-user-detail></app-user-detail>
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

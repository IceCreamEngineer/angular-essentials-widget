import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <input type="text" id="unique2" [(ngModel)]="name" />
    <p>Hello {{ name }}!</p>
    <strong>I'm the user component</strong>
  `,
})
export class UserComponent {
  @Input() name;

  onUserInput(event) {
    this.name = event.target.value;
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <button (click)="onUserInput()">Finish Him!</button>
    <p>Or....Set your own load state:</p>
    <input type="text" id="unique" [(ngModel)]="loadState" />
    <p>String interpolation example:</p>
    <p>I am {{ loadState }}!</p>
    <p>Two-way bind example:</p>
    <p [(textContent)]="loadState"></p>
    <strong>I'm the dashboard component</strong>
  `,
})
export class DashboardComponent {
  loadState = "loading";

  onUserInput() {
    this.loadState = "finished";
  }
}

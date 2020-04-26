import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  // Properties

  /**
   * Tracked items in our cart
   */
  @Input() items = [];

  /**
   * The new, user-inputted item
   */
  newItem = "";

  /**
   * What the user updates our items to be on input
   */
  @Output() itemAdded = new EventEmitter<string>();

  // Constructors

  /**
   * Default, argument-less constructor
   */
  constructor() {}

  // Methods

  /**
   * Default init method
   */
  ngOnInit() {}

  /**
   * Our Add Item event listener
   */
  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }

  /**
   * Enter key listener
   */
  onKeydown() {
    this.onAddItem();
  }
}

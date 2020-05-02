import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ViewChild,
} from "@angular/core";

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

  isClicked = false;

  // @ViewChild("AddItem") addItemBtn: ElementRef;

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
  onAddItem(event) {
    console.log(event);

    this.itemAdded.emit(this.newItem);
  }

  /**
   * Enter key event listener
   */
  @HostListener("window:keyup.enter", [])
  keyEvent() {
    if (this.newItem !== "" && !this.isClicked) {
      this.itemAdded.emit(this.newItem);
    }
  }
}

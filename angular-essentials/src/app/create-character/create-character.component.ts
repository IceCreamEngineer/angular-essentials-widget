import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"],
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: "None", value: "" },
    { display: "Light", value: "light" },
    { display: "Dark", value: "dark" },
  ];

  defaultName = "Obi-Wan";

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }

    console.log(submittedForm);

    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}

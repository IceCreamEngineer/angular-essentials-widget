import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  }

  public getCharacters(chosenList) {
    if (chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(
      "Changed side of " + charInfo.name + ", new side: " + charInfo.side
    );
  }

  addCharacter(name, side) {
    const newChar = { name: name, side: side };

    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });

    if (pos !== -1) {
      return;
    }

    this.characters.push(newChar);
  }
}

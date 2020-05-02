import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: "root",
})
export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];
  private logService: LogService;

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
    this.logService.writeLog(
      "Changed side of " + charInfo.name + ", new side: " + charInfo.side
    );
  }
}

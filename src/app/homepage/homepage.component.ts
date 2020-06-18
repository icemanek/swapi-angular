import { Component, OnInit } from "@angular/core";
import { SwapiConnectionService } from "../swapi-connection.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  damiano: string = "damian jest super";

  numberOne = 5;

  allowbutton = true;

  constructor() {}
  ngOnInit(): void {}
}

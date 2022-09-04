import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: String = "Mauricio"
  age = 30
  job = "Analista de Sistemas"
  hoobie = ["Cantar", " Jogar Futebol", " Bootcamps", " etc."]

  car = {
    name: "Pólo",
    year: 2022,
    type: "Flex",
    model: "GTX"

  }

  constructor() { }

  ngOnInit(): void {
  }

}

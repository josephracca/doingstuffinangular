import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  answer: number = 0
  isProperLength: boolean = false;
  isDirect: boolean = true;
  isCount: boolean = false;
  firstName = "";
  lastName = "";
  slackName = "";
  email = "";

  thePeople: any = [
    { first: 'Adrian', last: "Segura", mail: "asegura@codestack.co", slack: "Adrian Segura" },
    { first: 'Alex', last: "Ato", mail: "alexato0731@gmail.com", slack: "Alex_Ato" },
    { first: 'Anothay', last: "Chansy", mail: "achansylee@outlook.com", slack: "ann" },
    { first: 'Bryan', last: "Stewart", mail: "stewartbj93@gmail.com", slack: "Bryan Stewart" },
    { first: 'Carlos', last: "Gonzalez", mail: "carlosg2011@gmail.com", slack: "Carlos Gonzalez" },
    { first: 'Christy', last: "Eang", mail: "christyeang@yahoo.com", slack: "ChristyCreme" },
    { first: 'Demitrius', last: "Ovro", mail: "Daovro@gmail.com", slack: "Demitrius Ovro" },
    { first: 'Hugo', last: "Mejia", mail: "huegogh@gmail.com", slack: "Hugo M" },
    { first: 'Joseph', last: "Racca", mail: "josephracca@gmail.com", slack: "josephRacca" },
    { first: 'Juan', last: "Morales", mail: "jmorales@codestack.co", slack: "Juan M" },
    { first: 'Kenneth', last: "Martinez", mail: "krossmartinez@gmail.com", slack: "Ken Martinez" },
    { first: 'Leopoldo', last: "Manzo", mail: "manzoleopoldo@gmail.com", slack: "Leo" },
    { first: 'Matthew', last: "Mendoza", mail: "mattjm112999@gmail.com", slack: "Mendoza" },
    { first: 'Sean', last: "Chandler", mail: "schandler@codestack.co", slack: "Sean Chandler" },
    { first: 'Trevor', last: "Womack Jr.", mail: "Twomack6823@gmail.com", slack: "Trevor Womack" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getFirstName(index: number) {
    return this.thePeople[index].first;
  }

  setNames(index: number) {
    this.firstName = this.thePeople[index].first;
    this.lastName = this.thePeople[index].last;
    this.slackName = this.thePeople[index].slack;
    this.email = this.thePeople[index].mail;
    // return this.thePeople[index];
  }

  decrementNum(){
    this.answer--;
  }

  incrementNum(){
    this.answer++;
  }

  setCount(){
    this.isCount = !this.isCount;
  }

  setDirect(){
    this.isDirect = !this.isDirect;
  }

  addStudent(fn: string, ln: string, sn: string, em: string){
    this.isProperLength = true;
    const OBJ = {
      first: fn, 
      last: ln, 
      mail: sn, 
      slack: em,
      isHere: true
    }
    this.thePeople.push(OBJ)
    console.log(fn, ln, sn, em);
  }

}

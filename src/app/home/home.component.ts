import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Valeur venant de Parent
   * Et ya rien a faire juste consommer
   */ 
  @Input() value ? : string ;

  valueTestPipe : string = "Ngor Seck" ;
  /**
   * Envoie de valeur a Parent avec EventEmitter
   * Un evenement JS est defini pour pouvoir envoyer une donnee a Parent
   *  (click)="addNewItem(VALEUR_A_ENVOYER)"
   *  myNewEvent  sera explote par le Parent 
   * (myNewEvent)="getItem($event)" au niveau de Parent
   */
  @Output() myNewEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log("Hooo OK " + this.value)
  }

  addNewItem(value: string) {
    this.myNewEvent.emit(value);
  }

}

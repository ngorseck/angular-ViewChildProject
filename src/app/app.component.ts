import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChildProject';
  /** 
   * Valeur a envoyer a Child grace a l´instruction : [value]="inputText" 
   * et value sera exploiter dans Child avec
   * @Input() value ? : string ;
   * [value] permet d´envoyer a Child une valeur
   * inputText stocke la valeur a envoyer
   */
  inputText : string = "My inputText for child";
  /**
   * Valeur recu de child
   */
  outputText ? : string ;

  //for OutPut from child
  getItem(newItem: string) {
    console.log(newItem);
    this.outputText = newItem;
  }
}

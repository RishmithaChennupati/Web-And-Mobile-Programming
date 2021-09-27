import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  items = ['First Task', 'Second Task', 'Third Task'];
  counter = 0;
  newItem = '';
  valid = false;

  newTask() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
    // @ts-ignore
    document.getElementById('addItem').focus(); 
  }
  completeItem(item: any, i: any) {
    // @ts-ignore
    document.getElementById(i).innerHTML = '<del>'  + item + '</del>';
  }
  deleteItem(i: any) {
    this.items.splice(i,1);
  }

}

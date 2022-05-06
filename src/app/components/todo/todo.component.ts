import { Component, OnInit } from '@angular/core';
import { addTask, todoList} from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  title = "To Do List"
  visualizza= "Recupero Task..."
  newArr = todoList;
  testo = "";
  testo2= "";

  constructor(){

      setTimeout(() =>{
        if (this.newArr.length === 0){
          this.visualizza = "Oops non ci sono task..."
        }else if (this.newArr.length !== 0) {
          this.visualizza = "Le tue Task"
        }
      },2000);
  };

   add(titolo: string){
    addTask(titolo);
      this.testo = "";
      this.visualizza = "";

  }

    completata(num:number){
      this.newArr[num-1].completed = true;
      let ul = document.querySelector("#ul");
      ul?.remove();
  }

  ngOnInit(): void {
  }

}

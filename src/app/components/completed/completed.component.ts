import { Component, OnInit } from '@angular/core';
import { addTask, todoList} from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  newArr = todoList;
  testo = "";

   add(titolo: string){
    addTask(titolo);
    setTimeout(()=> {
      this.testo = "";
    });
  }

  ngOnInit(): void {
  }

}

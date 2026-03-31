import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  ngOnInit(){
    this.tastArr = JSON.parse(localStorage.getItem("task")|| "")
  }
  newTask = '';
  tastArr: Task[] = [];

  compBtnText  = "Complete"

  addTask() {
    if (this.newTask != '') {
      this.tastArr.push({
        id: this.tastArr.length+1 ,
        title: this.newTask,
        isCompleted: false,
      });
    }
    this.newTask = '';  
    this.set()
  }

  deleteTask(index: number) {
    this.tastArr.splice(index, 1);
      this.set()
  }

  compTask(obj : Task){
     obj.isCompleted = !obj.isCompleted;
      // obj.isCompleted ? this.compBtnText = "Undo" : this.compBtnText =  "Complete"
      this.set()
  }

  
  set(){
    localStorage.setItem("task", JSON.stringify(this.tastArr))
  }
}


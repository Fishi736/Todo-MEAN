import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  editMode: boolean = false;
  tdata: any = [];


  todoForm = this.fb.group({
    task: ['', [Validators.required]]
  });

  updateTodo = this.fb.group({
    id: ['', [Validators.required]],
    task: ['', [Validators.required]]
  });


  constructor(private q: AppService, private fb: FormBuilder) {

    this.ngOnInit();
  }

  ngOnInit() {

    this.q.gettask().subscribe(k => {
      this.tdata = k['data'];
    })
  }


  send() {
    console.log(this.todoForm.value)
    this.q.addtask(this.todoForm.value).subscribe(k => {
      this.ngOnInit();

    });
  }


  delete(_id) {
    this.q.deleteTask(_id).subscribe(k => {
      this.ngOnInit();

    });
  }


  edit(item) {
    this.updateTodo.setValue({ id: item._id, task: item.task });

  }

  update() {
   
    console.log(this.updateTodo.value)
    this.q.updateTask(this.updateTodo.value).subscribe(k => {
      this.ngOnInit();
      
    });
  }



}

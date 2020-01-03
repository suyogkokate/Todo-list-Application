import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';


  tasklist=[
    {
      tname:"Finish Presentation"
    },
    {
      tname:"Preapare Workshop"
    },
    {
      tname:"done"
    },
  ];

  task="";
  new;
  id=0;
  val;
  
  changecolor="green";
  addTask()
  {
    if(this.task!="")
    {
      this.new={
        tname:this.task
        }

      if(this.tasklist.push(this.new))
      {
        alert("Please Task Added..!");
      }
    }
    else{
      alert("Enter Task..!");
    }

    this.task="";
  }

  deleteTask(i)
  {
    if(this.tasklist.splice(i,1))
    {
      alert("Task Deleted..!");
    }
  }
  editTask(val)
  {
    this.id=1;
    this.val=val;
    this.task=this.tasklist[this.val].tname;
  }
  
  updateTask()
  {
    this.new={
      tname:this.task
      }
  if(this.tasklist[this.val]=this.new)
  {
    alert("Task Updated..");
  }
  this.task="";
  this.id=0;
  }

  done()
  {
    alert("Done...");
  }
}

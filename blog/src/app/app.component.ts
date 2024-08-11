import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '16';
  getName(name:any){
    alert(name);
  }
  getData(val:any){
    console.log(val)
  }
  displayVal='';
  getValue(val:any)
  {
    console.log(val)
    this.displayVal=val;
  }
count=0;
  counter(type:any){
    type=='add' ?this.count++:this.count--;
  }
}

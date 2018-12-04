import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private items:Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    this.items.push({id:this.getID(), link:''});
  }

  removeItem(id:string){
    this.items = this.items.filter(function(item){
      return item.id != id;
    });
  }

  getID(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}

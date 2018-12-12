import { Component, OnInit } from '@angular/core';

/**
 * services
 * */
import { DomainService } from '../../services/domain.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private items:Array<any> = [];
  public documentId = "lM4ZE7zpppIC7UMMMZPc";
  constructor(
    private domain:DomainService,
    private authService:AuthService
  ) {
    this.domain.currentItem = "";
    this.domain.getDomains().subscribe((domainsSnapshot) => {
      domainsSnapshot.forEach((domainData: any) => {
        this.items = JSON.parse(domainData.payload.doc.data().dList);
        this.authService.data.admin = this.authService.data.email === domainData.payload.doc.data().admin;
      })
    });
  }

  ngOnInit() {

  }

  addItem(){
    this.items.push({id:this.getID(), link:''});
  }

  removeSubItem(id:string){
    var self = this;
    this.items.filter(function(item){
      if(item.id === self.domain.currentItem){
        item.elements = item.elements.filter(function(ele){
          return ele.id != id;
        });
      }
    });
  }

  removeItem(id:string){
    this.items = this.items.filter(function(ele){
      return ele.id != id;
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

  addDomain(){
    this.items.push({id:this.getID(), elements:[], name:'', selected:false});
  }

  addLink(id:string){
    var self = this;
    this.items.filter(function(ele){
      if(ele.id === id){
        ele.selected = true;
        ele.elements.push({id:self.getID(), link:''});
      }else{
        ele.selected = false;
      }
    });
    this.domain.currentItem = id;
  }

  viewLinks(id:string){
    this.items.filter(function(ele){
      if(ele.id === id){
        ele.selected = true;
      }else{
        ele.selected = false;
      }
    });
    this.domain.currentItem = id;
  }

  saveData(){
    let data = {
      dList: JSON.stringify(this.items),
      admin: this.authService.data.email
    }
    this.domain.updateDomains(this.documentId, data).then(() => {
    }, (error) => {
      console.log(error);
    });
  }

  focusElement(id:string){
    this.items.filter(function(ele){
      if(ele.id === id){
        ele.selected = true;
      }else{
        ele.selected = false;
      }
    });
    this.domain.currentItem = id;
  }

  navigate(view:string){
    this.authService.navigate(view);
  }
}

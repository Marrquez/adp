import { Pipe, PipeTransform } from '@angular/core';

/**
 * services
 * */
import { DomainService } from '../services/domain.service';

@Pipe({name: 'getLinks', pure:false})
export class GetLinksPipe implements PipeTransform {
  constructor(private domain:DomainService) { }
  transform(items:Array<any>): Array<any> {
    var self = this;
    var domain = items.filter(function(ele){
      return ele.id === self.domain.currentItem;
    })[0];

    return domain ? domain.elements : [];
  }
}

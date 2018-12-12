import { Pipe, PipeTransform } from '@angular/core';

/**
 * services
 * */
import { DomainService } from '../services/domain.service';

@Pipe({name: 'getDomains', pure:false})
export class GetDomainsPipe implements PipeTransform {
  constructor(private domain:DomainService) { }
  transform(domains:string): Array<any> {
    var self = this;

    console.log(domains);

    return [];
  }
}

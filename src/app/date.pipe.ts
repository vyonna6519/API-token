import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): any {
    let today: any= new Date().getDay; //get current date and time
    let creationday:any= value.slice
    var dateDifference = Math.abs(value - today); //returns value in miliseconds
    
    return dateDifference
  }
}



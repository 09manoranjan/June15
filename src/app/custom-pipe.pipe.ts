import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, gender : string): any {
    if(gender == "male"){
      return "Mr. "+value;
    }
    else{
      return "Mrs. "+value;
    }
  }

}

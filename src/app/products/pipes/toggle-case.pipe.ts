import { Pipe, PipeTransform } from '@angular/core';


//* tiago | toggleCase = 'TIAGO'
//* TIAGO | toggleCase = "tiago"


@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform( value: string, toUpper:boolean = false ): string {


    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();

  }
}

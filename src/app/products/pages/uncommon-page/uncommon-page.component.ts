import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //* i18nSelect
  public name: string = 'Tiago';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void {
    this.name = 'Minna';
    this.gender = 'female'
  }



  //* i18nPlural

  public clients : string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }



  //*KeyValue pipe  //* me permite recorrer las propiedades de un objeto como si fuese un arreglo.

  public person = {
    name: 'Tiago',
    age: '22',
    address: 'Rosario, ARG'
  }



  //*Async pipe   - sirve para promesa u observable. El pipe detecta automaticamente para cual de los dos se lo utiliza.

    public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap(value => console.log('tap:',value))
    );
    //el interval se importa de rxjs, crea un observable que empieza a emitir valores desde 0, 1, 2, 3 basado en la cantidad de tiempo que se defina. En este caso, cada 2 segundos emite el siguiente valor


      public promiseValue: Promise<string> = new Promise (( resolve, reject) => {

        setTimeout(() => {
          resolve('Tenemos data en la promesa');
          this.person.name = 'Luis Pieroni';
          this.person.age = '56'
        }, 3500);
        // 3 segundos y medio despues, tenemos la data.
      })


}



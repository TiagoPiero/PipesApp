import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'tiago'
  public nameUpper: string = 'TIAGO'
  public fullName: string = 'tIAgO pIeROnI'

  public customDate: Date = new Date()

}

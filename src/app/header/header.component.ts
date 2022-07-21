import {Component} from "@angular/core";

@Component({
  selector: 'app-header',
  template: `<div class="header">
    <h1>Angular App</h1>
  </div>
  <ng-content></ng-content>
  `,
  styles:[
    `
      .header {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: red;
        h1{
          color: white;
          font-size: 30px;
          font-weight: bold;
        }
      }


    `
  ]
})


export class HeaderComponent{}

import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public count:number=0
  public add():void{
    this.count++
  }
  public remove():void{
    this.count--
  }
  public defaultCount():void{
    this.count = 0
  }
}

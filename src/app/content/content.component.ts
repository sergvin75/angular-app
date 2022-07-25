import {
  Component,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements DoCheck {
    public count:number=0
    public disabled:boolean = false

    public add():void{
      this.count++
    }
    public remove():void{
      this.count--
    }
    public defaultCount():void{
      this.count = 0
    }
//  DoCheck - после каждого обновления проверяет наши свойства
    public ngDoCheck(): void {
      this.disabled = this.count===0

    }

}


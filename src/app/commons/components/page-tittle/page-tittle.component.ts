import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-tittle',
  templateUrl: './page-tittle.component.html',
  styleUrls: ['./page-tittle.component.scss']
})
export class PageTittleComponent {

  @Input() titulo: string = '';
  @Input() nomeBotao: string = '';

  @Output() botaoEvent: EventEmitter<any> = new EventEmitter();


  click(event: any) {
    this.botaoEvent.emit();
  }

}

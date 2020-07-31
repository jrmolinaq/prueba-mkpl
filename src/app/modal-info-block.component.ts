import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'modal-info-block',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/prueba-mkpl/app/modal-info-block.component.html',
  styleUrls: [
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/prueba-mkpl/css/modal-info-block.component.scss']
})
export class ModalInfoBlockComponent {

  @Input() info: string;
  @Input() bold: string;
  @Input() icon: string;
  @Input() error: string;
}

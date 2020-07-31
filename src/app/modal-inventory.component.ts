import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'modal-inventory',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/prueba-mkpl/app/modal-inventory.component.html',
  styleUrls: [
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/prueba-mkpl/css/modal-inventory.component.scss']
})
export class ModalInventoryComponent {

  @Input() error: string;
}

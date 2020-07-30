import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

declare const Liferay: any;

@Component({
  selector: 'empty-inventory',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/prueba-mkpl/app/empty-inventory.component.html',
    styleUrls: [
      Liferay.ThemeDisplay.getPathContext() + 
      '/o/prueba-mkpl/css/empty-inventory.component.scss']
})
export class EmptyInventoryComponent {

  constructor(
    private modalService: ModalService
  ) {}

  openModal(id: string) {
    this.modalService.open(id);
  }
}

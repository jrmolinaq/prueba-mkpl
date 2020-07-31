import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmptyInventoryComponent } from './empty-inventory.component';
import { InputFileComponent } from './input-file.component';
import { ModalComponent } from './modal.component';
import { ModalInfoBlockComponent } from './modal-info-block.component';
import { ModalInventoryComponent } from './modal-inventory.component';
import { UploadModalComponent } from './upload-modal.component';

import { ShortLargeStringsPipe } from './pipes/short-large-strings.pipe';
import { InputControlComponent } from './input-control.component';
import { SelectControlComponent } from './select-control.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		InputControlComponent,
		EmptyInventoryComponent,
		InputFileComponent,
		ModalComponent,
		ModalInfoBlockComponent,
		ModalInventoryComponent,
		SelectControlComponent,
		UploadModalComponent,
		ShortLargeStringsPipe
	],
	// exports: [ShortLargeStringsPipe],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [ShortLargeStringsPipe],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}

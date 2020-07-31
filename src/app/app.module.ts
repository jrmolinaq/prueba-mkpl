import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmptyInventoryComponent } from './empty-inventory.component';
import { InputFileComponent } from './input-file.component';
import { ModalInventoryComponent } from './modal-inventory.component';
import { ModalComponent } from './modal.component';
import { UploadModalComponent } from './upload-modal.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		EmptyInventoryComponent,
		InputFileComponent,
		ModalInventoryComponent,
		ModalComponent,
		UploadModalComponent
	],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}

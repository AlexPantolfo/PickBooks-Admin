import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material.module';
import { PageTittleComponent } from './page-tittle.component';

@NgModule({
  declarations: [
    PageTittleComponent
  ],
  exports: [
    PageTittleComponent
  ],
  imports: [
    MaterialModule,
  ]
})
export class PageTitleModule { }

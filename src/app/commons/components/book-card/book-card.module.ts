import { NgModule } from '@angular/core';

import { BookCardComponent } from './book-card.component';
import { MaterialModule } from 'src/app/core/material.module';


@NgModule({
    declarations: [
        BookCardComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        BookCardComponent
    ],
})
export class BookCardModule { }

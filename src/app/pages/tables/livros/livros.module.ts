import { NgModule } from '@angular/core';
import { LivrosComponent } from './livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material.module';
import { PageTitleModule } from 'src/app/commons/components/page-tittle/page-title.module';
import { BookCardModule } from 'src/app/commons/components/book-card/book-card.module';

const routes: Routes = [
  {
    path: '',
    component: LivrosComponent
  },
  {
    path: 'cadastro',
    component: CadastroLivroComponent
  },
];

@NgModule({
  declarations: [
    LivrosComponent,
    CadastroLivroComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    PageTitleModule,
    BookCardModule
  ]
})
export class LivrosModule { }

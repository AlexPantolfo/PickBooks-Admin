import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent implements OnInit {

  public cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  save() {

  }
}

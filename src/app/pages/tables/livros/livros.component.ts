import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  cadastro() {
    this.router.navigateByUrl('livros/cadastro')
  }

}

const ELEMENT_DATA: any[] = [
  { nome: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { nome: 'Helium', weight: 4.0026, symbol: 'He' },
  { nome: 'Lithium', weight: 6.941, symbol: 'Li' },
  { nome: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { nome: 'Boron', weight: 10.811, symbol: 'B' },
  { nome: 'Carbon', weight: 12.0107, symbol: 'C' },
  { nome: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { nome: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { nome: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { nome: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuTabelas: any[] = [
    { path: '/livros', title: 'Livros', icon: 'content_paste' },
    { path: '/livros22', title: 'Livros22', icon: 'content_paste' },
  ];


  ngOnInit(): void {
  }

}


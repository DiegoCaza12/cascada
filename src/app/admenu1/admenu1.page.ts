import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admenu1',
  templateUrl: './admenu1.page.html',
  styleUrls: ['./admenu1.page.scss'],
})
export class Admenu1Page implements OnInit {

  opciones: string= "";
  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.opciones = this.router.snapshot.paramMap.get('opciones');
  }

}

import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent {
  id: number;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.id = +activatedRoute.snapshot.paramMap.get('id')!;
  }
}

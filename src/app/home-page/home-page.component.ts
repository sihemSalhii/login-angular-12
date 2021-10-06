import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../shared/app.service";
import {Article} from "../shared/models/article";
import {map, mergeAll} from "rxjs/operators";
import {SortType} from "../shared/models/sort-type";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];
  displayDescription: boolean[] = [];
  sort: string = SortType.ASC;

  constructor(
    private readonly appService: AppService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.getDataAPI();
  }

  private getDataAPI() {
    const dataArticles: Article[] = [];
    this.appService.getDataAPI()
      .pipe(
        mergeAll(),
        map(data => {
          const item = Object.assign({}, data);
          if (!item.images) {
            Object.assign(item, item.images = [
              { 'url': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg', 'type': 'thumbnail' }
            ]);
          }
          dataArticles.push(item);
          return dataArticles;
        })
      )
      .subscribe(data => this.articles = data);
  }

  goToItem(id: number | undefined) {
    this.router.navigate(['/item', id]);
  }

  sortItems(sortType: string): string {
    sortType === SortType.ASC ?  this.sort = SortType.ASC: this.sort = SortType.DESC;
    sortType === SortType.DESC ?  this.sort = SortType.DESC: this.sort = SortType.ASC;
    return this.sort;
  }
}

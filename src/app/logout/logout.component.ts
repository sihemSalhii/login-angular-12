import { Component, OnInit } from '@angular/core';
import {AppService} from "../shared/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private readonly appService: AppService,
              private readonly router: Router,) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.appService.logout();
    this.router.navigate(['/login']);
  }

}

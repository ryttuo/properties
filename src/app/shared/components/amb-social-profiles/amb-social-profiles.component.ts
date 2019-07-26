import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, showSidenav, getAppTitle } from 'src/app/core/appState';
import { OpenSidenav, CloseSidenav } from 'src/app/core/layout/layout.actions';

@Component({
  selector: 'amb-social-profiles',
  templateUrl: './amb-social-profiles.component.html',
  styleUrls: ['./amb-social-profiles.component.scss']
})
export class AmbSocialProfilesComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit() {


  }





}

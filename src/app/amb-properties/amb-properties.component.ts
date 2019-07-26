import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../core/appState';
import { PropertyStoreInterface, getProperties } from './store/property.selectors';
import { SetAppTitle } from '../core/layout/layout.actions';
import { LoadPropertiesAction } from './store/property.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'amb-properties',
  templateUrl: './amb-properties.component.html',
  styleUrls: ['./amb-properties.component.scss']
})
export class AmbPropertiesComponent implements OnInit {

  propertiesData$: Observable<Array<any>>;
  @Input() listContent = true;

  constructor(
    private layoutStore: Store<AppState>,
    private propertyStore: Store<PropertyStoreInterface>,
  ) { }

  ngOnInit() {

    if (this.listContent) {
      this.layoutStore.dispatch(new SetAppTitle('properties'));
    }

    this.propertyStore.dispatch(new LoadPropertiesAction());

    this.propertiesData$ = this.propertyStore.pipe(select(getProperties));

  }

}

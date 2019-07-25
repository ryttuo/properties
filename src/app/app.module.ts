import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AmbNavComponent } from './shared/components/amb-nav/amb-nav.component';
import { AmbFooterComponent } from './shared/components/amb-footer/amb-footer.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/appState';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './amb-articles/store/article.effects';

export const effects: any[] = [
  ArticleEffects,
];

@NgModule({
  declarations: [
    AppComponent,
    AmbNavComponent,
    AmbFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

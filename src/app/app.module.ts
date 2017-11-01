import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamplesModule } from './examples/examples.module';
import { NgrxExamplesModule } from './ngrx-examples/ngrx-examples.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { appReducer } from './store/app.reducer';
import { BareObservableService } from './http-services/bare-observable/bare-observable.service';
import { PipelineObservableService } from './http-services/pipeline-observable/pipeline-observable.service';
import { DataResolverService } from './http-services/data-resolver/data-resolver.service';
import { DataEffect } from './http-services/effects/effects.service';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ExamplesModule,
    NgrxExamplesModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([DataEffect]),
  ],
  providers: [
    BareObservableService, 
    PipelineObservableService,
    DataResolverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

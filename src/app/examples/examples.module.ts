import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ControllerSubscribingComponent } from './controller-subscribing/controller-subscribing.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { MultipleUsesInTemplateComponent } from './multiple-uses-in-template/multiple-uses-in-template.component';
import { SharedMultpleUsesComponent } from './shared-multple-uses/shared-multple-uses.component';
import { PipelineRequestsComponent } from './pipeline-requests/pipeline-requests.component';
import { RoutingDataComponent } from './routing-data/routing-data.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,    
  ],
  declarations: [
    ControllerSubscribingComponent,
    AsyncPipeComponent,
    MultipleUsesInTemplateComponent,
    SharedMultpleUsesComponent,
    PipelineRequestsComponent,
    RoutingDataComponent
  ],
  exports: [
    ControllerSubscribingComponent,
    AsyncPipeComponent,
    MultipleUsesInTemplateComponent,
    SharedMultpleUsesComponent,
    PipelineRequestsComponent
  ],
  providers: []
})
export class ExamplesModule { }

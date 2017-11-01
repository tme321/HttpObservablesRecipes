import { Routes } from "@angular/router";
import { RoutingDataComponent } from "./examples/routing-data/routing-data.component";
import { AsyncPipeComponent } from "./examples/async-pipe/async-pipe.component";
import { ControllerSubscribingComponent } from "./examples/controller-subscribing/controller-subscribing.component";
import { MultipleUsesInTemplateComponent } from "./examples/multiple-uses-in-template/multiple-uses-in-template.component";
import { PipelineRequestsComponent } from "./examples/pipeline-requests/pipeline-requests.component";
import { SharedMultpleUsesComponent } from "./examples/shared-multple-uses/shared-multple-uses.component";
import { NgrxSimpleComponent } from "./ngrx-examples/ngrx-simple/ngrx-simple.component";
import { NgrxWithEffectsComponent } from "./ngrx-examples/ngrx-with-effects/ngrx-with-effects.component";
import { DataResolverService } from './http-services/data-resolver/data-resolver.service';

export const appRoutes: Routes = [
    { path: 'controllerSubscribing', component: ControllerSubscribingComponent },
    { path: 'asyncPipe', component: AsyncPipeComponent },
    { path: 'multipleUses', component: MultipleUsesInTemplateComponent },
    { path: 'sharedMultipleUses', component: SharedMultpleUsesComponent },
    { path: 'pipelineRequests', component: PipelineRequestsComponent },
    { path: 'routingData', component: RoutingDataComponent, resolve: { data: DataResolverService },  },
    { path: 'ngrxSimple', component: NgrxSimpleComponent },
    { path: 'ngrxEffects', component: NgrxWithEffectsComponent },
];
  
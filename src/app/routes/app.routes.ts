import { NotFoundComponent } from '../components/notfound/notfound.component'

import { Routes } from '@angular/router';
import { UserRoutes } from './user.routes';

export const AppRoutes: Routes = [].concat(UserRoutes, [
    { path: '**', component:  NotFoundComponent }
]);

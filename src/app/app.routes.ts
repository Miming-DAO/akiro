import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WorkOnProgressComponent } from './shared/work-on-progress/work-on-progress.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES)
  },
  {
    path: 'launch-app',
    component: WorkOnProgressComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

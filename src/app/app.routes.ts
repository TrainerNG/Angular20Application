import { Routes } from '@angular/router';
import { CanDeactivateGuard } from './guards/can-deactivate-guard';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { AuthGuard } from './guards/can-activate-guard';
import { DataResolver } from './resolvers/data-resolve-resolver';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('./components/home/home').then((m)=> m.Home),
        canDeactivate:[CanDeactivateGuard],
        canActivate: [AuthGuard]
    },
    {
        path:'about',
        component: About,
        canActivate: [AuthGuard],
        resolve:{ameer: DataResolver}
    },

    {
        path:'login',
        component:Login
    }
];

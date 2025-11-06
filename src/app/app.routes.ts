import { Routes } from '@angular/router';
import { CanDeactivateGuard } from './guards/can-deactivate-guard';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { AuthGuard } from './guards/can-activate-guard';
import { DataResolver } from './resolvers/data-resolve-resolver';
import { SubjectDemo } from './components/subject-demo/subject-demo';
import { BehaviourSubjectDemo } from './components/behaviour-subject-demo/behaviour-subject-demo';
import { RxjsDemo } from './components/rxjs-demo/rxjs-demo';
import { SignalDemo } from './components/signal-demo/signal-demo';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home').then((m) => m.Home),
        canDeactivate: [CanDeactivateGuard],
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        component: About,
        canActivate: [AuthGuard],
        resolve: { ameer: DataResolver }
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'subject',
        component: SubjectDemo
    },
    {
        path: 'beh-subject',
        component: BehaviourSubjectDemo
    },

    {
        path:'rxjs-demo',
        component: RxjsDemo
    },

    {
        path:'signal-demo',
        component: SignalDemo
    }
];

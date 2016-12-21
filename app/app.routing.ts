import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { MapComponent } from './map/index';
import { TestComponent } from './test/test.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'map',pathMatch: 'full'  },
    { path: '', component: HomeComponent,canActivate: [AuthGuard],
        children:[
            {
                path:'map',
                component:MapComponent,
                children:[
                    {
                        path:':name',
                        component:CommentsComponent
                    }
                    
                ]
            }
        ]
    },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
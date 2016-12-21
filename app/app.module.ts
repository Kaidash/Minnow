import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { MapComponent } from './map/index';
import { NavComponent } from './navigation/index';
import { PlaceService } from './_services/place.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyASSTfJoKWLUTe0lpzG6HEbqts44tWJMxs'
        }),
        HttpModule,
        MaterialModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        MapComponent,
        NavComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        PlaceService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
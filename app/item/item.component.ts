/**
 * Created by nikita on 20.12.16.
 */
import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>`
})

export class ItemComponent implements OnDestroy {

    private id: number;
    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute){

        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}

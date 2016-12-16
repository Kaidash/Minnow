/**
 * Created by nikita on 16.12.16.
 */
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'nav-component',
    templateUrl: 'navigation.component.html'
})
export class NavComponent  {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}

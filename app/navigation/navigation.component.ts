/**
 * Created by nikita on 16.12.16.
 */
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'nav-component',
    template: `  
        <button md-icon-button [md-menu-trigger-for]="menu">
           <md-icon>more_vert</md-icon>
        </button>
        
        <md-menu #menu="mdMenu">
            <button md-menu-item> Refresh </button>
            <button md-menu-item> Settings </button>
            <button md-menu-item> Help </button>
            <button md-menu-item disabled> Sign Out </button>
        </md-menu>
    `
})

export class NavComponent {
    title: string="asd"
}
/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'map-component',
    templateUrl: 'map.component.html'
})

export class MapComponent {
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;
}
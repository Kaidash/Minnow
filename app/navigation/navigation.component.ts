/**
 * Created by nikita on 16.12.16.
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-component',
    templateUrl: 'navigation.component.html'
})
export class NavComponent  {
    @Input() userName: any
    

}

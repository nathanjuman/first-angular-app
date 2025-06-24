import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, // are not declared in a ng module component
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}
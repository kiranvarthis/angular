import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AnimalsComponent} from './animals.component';
import {FruitsComponent} from './fruits.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <animals></animals>
        <fruits></fruits>
    `,
    directives: [
        CoursesComponent, 
        AuthorsComponent, 
        AnimalsComponent,
        FruitsComponent
    ]
})
export class AppComponent { }
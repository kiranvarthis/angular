import {Component} from "angular2/core";
import {CourseService} from "./course.service";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2> 
        {{ title }}
        <ul>
            <li *ngFor="#cource of courses">
                {{ cource }}
            </li>
        </ul>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
    title = "Courses Title Text";
    courses;

    constructor(courseService:CourseService) {
        this.courses = courseService.getCourses();
    }

}
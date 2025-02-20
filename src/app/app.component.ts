import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './Task/task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SampleApplication-Frontend';
}

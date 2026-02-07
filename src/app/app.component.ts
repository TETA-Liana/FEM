import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../layout/sidebar/sidebar';
import { Topbar} from '../layout/topbar/topbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, Topbar],
  templateUrl: './app.component.html'
})
export class AppComponent {}



import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from '../layout/sidebar/sidebar';
import { Topbar } from '../layout/topbar/topbar';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, Topbar],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      this.runCreateIcons();
    });
  }

  /** Show sidebar and topbar only for dashboard (and other app routes), not for sign-in/sign-up. */
  showLayout(): boolean {
    const path = this.router.url.split('?')[0];
    const excludedRoutes = ['/', '/signin', '/signup', '/admin-dashboard'];
    return !excludedRoutes.includes(path);
  }

  private runCreateIcons(): void {
    const run = () => {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    };
    setTimeout(run, 0);
    setTimeout(run, 150);
    setTimeout(run, 400);
  }
}



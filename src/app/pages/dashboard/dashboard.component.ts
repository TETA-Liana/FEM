import { AfterViewInit, Component } from '@angular/core';

declare const lucide: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    lucide.createIcons();
  }
}

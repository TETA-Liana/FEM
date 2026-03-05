import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css']
})
export class SigninComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
      setTimeout(() => lucide.createIcons(), 100);
    }
  }
}

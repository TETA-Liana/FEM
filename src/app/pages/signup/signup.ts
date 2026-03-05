import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
      // Ensure icons are rendered even if there's a slight delay
      setTimeout(() => lucide.createIcons(), 100);
    }
  }
}

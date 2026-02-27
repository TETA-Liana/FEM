import { Component, AfterViewInit } from '@angular/core';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
  selector: 'app-add-extinguisher',
  standalone: true,
  imports: [],
  templateUrl: './add-extinguisher.html',
  styleUrl: './add-extinguisher.css',
})
export class AddExtinguisher implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    }, 100);
  }
}

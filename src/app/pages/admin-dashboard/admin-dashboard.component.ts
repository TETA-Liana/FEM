import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const lucide: { createIcons: (opts?: { nameAttr?: string }) => void } | undefined;

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements AfterViewInit {

    ngAfterViewInit() {
        this.initIcons();
    }

    private initIcons() {
        const run = () => {
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        };

        // Immediate run
        run();

        // Sequence of retries to catch any late rendering
        [100, 300, 600, 1000, 2000].forEach(delay => {
            setTimeout(run, delay);
        });
    }
}

import { Injectable, computed, inject, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

export const CUSTOM_BREAKPOINTS = {
  Mobile: '(max-width: 374px)',
  Tablet: '(min-width: 375px) and (max-width: 1023px)',
  Desktop: '(min-width: 1024px) and (max-width: 1439px)',
  Large: '(min-width: 1440px)',
};

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);
  private currentBreakpoint = signal<string | null>(null);

  constructor() {
    this.breakpointObserver
      .observe([
        CUSTOM_BREAKPOINTS.Mobile,
        CUSTOM_BREAKPOINTS.Tablet,
        CUSTOM_BREAKPOINTS.Desktop,
        CUSTOM_BREAKPOINTS.Large,
      ])
      .subscribe((result) => {
        for (const [key, query] of Object.entries(CUSTOM_BREAKPOINTS)) {
          if (result.breakpoints[query]) {
            this.currentBreakpoint.set(key);
            break;
          }
        }
      });
  }

  isMobile = computed(() => this.currentBreakpoint() === 'Mobile');
  isTablet = computed(() => this.currentBreakpoint() === 'Tablet');
  isDesktop = computed(
    () => this.currentBreakpoint() === 'Desktop' || this.currentBreakpoint() === 'Large',
  );
}

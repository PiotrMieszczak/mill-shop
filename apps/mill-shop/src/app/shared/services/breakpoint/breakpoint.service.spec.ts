import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BreakpointService, CUSTOM_BREAKPOINTS } from './breakpoint.service';

jest.mock('@angular/cdk/layout', () => ({
  BreakpointObserver: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
  })),
}));

describe('BreakpointService', () => {
  let service: BreakpointService;
  let breakpointObserver: jest.Mocked<BreakpointObserver>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakpointService, BreakpointObserver],
    });

    service = TestBed.inject(BreakpointService);
    breakpointObserver = TestBed.inject(BreakpointObserver) as jest.Mocked<BreakpointObserver>;
  });

  function simulateBreakpoint(match: Record<string, boolean>) {
    breakpointObserver.observe.mockReturnValue(
      of({
        breakpoints: match as { [key: string]: boolean },
        matches: Object.values(match).some(Boolean),
      } as BreakpointState),
    );
  }

  it('should detect Mobile breakpoint', () => {
    simulateBreakpoint({ [CUSTOM_BREAKPOINTS.Mobile]: true });
    expect(service.isMobile()).toBe(true);
    expect(service.isTablet()).toBe(false);
    expect(service.isDesktop()).toBe(false);
  });

  it('should detect Tablet breakpoint', () => {
    simulateBreakpoint({ [CUSTOM_BREAKPOINTS.Tablet]: true });
    expect(service.isMobile()).toBe(false);
    expect(service.isTablet()).toBe(true);
    expect(service.isDesktop()).toBe(false);
  });

  it('should detect Desktop breakpoint', () => {
    simulateBreakpoint({ [CUSTOM_BREAKPOINTS.Desktop]: true });
    expect(service.isMobile()).toBe(false);
    expect(service.isTablet()).toBe(false);
    expect(service.isDesktop()).toBe(true);
  });

  it('should detect Large breakpoint', () => {
    simulateBreakpoint({ [CUSTOM_BREAKPOINTS.Large]: true });
    expect(service.isMobile()).toBe(false);
    expect(service.isTablet()).toBe(false);
    expect(service.isDesktop()).toBe(true);
  });

  it('should default to null when no match', () => {
    simulateBreakpoint({});
    expect(service.isMobile()).toBe(false);
    expect(service.isTablet()).toBe(false);
    expect(service.isDesktop()).toBe(false);
  });
});

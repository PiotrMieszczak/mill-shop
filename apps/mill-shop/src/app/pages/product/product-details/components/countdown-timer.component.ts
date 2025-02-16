import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { interval, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  countdownSignal: WritableSignal<{ hours: number; minutes: number; seconds: number }> = signal({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private startCountdown(): void {
    interval(1000)
      .pipe(
        startWith(0),
        map(() => this.calculateTimeUntilMidnight()),
        takeUntil(this.destroy$),
      )
      .subscribe((time) => this.countdownSignal.set(time));
  }

  private calculateTimeUntilMidnight(): { hours: number; minutes: number; seconds: number } {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight.getTime() - now.getTime();

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }
}

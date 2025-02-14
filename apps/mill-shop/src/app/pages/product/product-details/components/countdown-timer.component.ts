import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownTimerComponent implements OnInit {
  countdownSignal: WritableSignal<{ hours: number; minutes: number; seconds: number }> = signal({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  ngOnInit(): void {
    this.startCountdown();
  }

  private startCountdown(): void {
    interval(1000)
      .pipe(
        map(() => {
          const now = new Date();
          const midnight = new Date();
          midnight.setHours(24, 0, 0, 0);
          const diff = midnight.getTime() - now.getTime();

          return {
            hours: Math.floor(diff / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000),
          };
        }),
      )
      .subscribe((time) => this.countdownSignal.set(time));
  }
}

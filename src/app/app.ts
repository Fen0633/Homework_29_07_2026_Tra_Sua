import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const NARROW_SCREEN_QUERY = '(max-width: 839.98px)';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bai-tap-tra-sua');
  protected readonly name = signal('Trà Sữa bru');

  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly isNarrowScreen = toSignal(
    this.breakpointObserver.observe(NARROW_SCREEN_QUERY).pipe(map((state) => state.matches)),
    { initialValue: this.breakpointObserver.isMatched(NARROW_SCREEN_QUERY) },
  );
}

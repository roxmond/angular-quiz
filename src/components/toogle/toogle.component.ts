import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toogle',
  standalone: true,
  imports: [MatSlideToggleModule],
  template: `<p>toogle works!</p>`,
  styleUrl: './toogle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class ToogleComponent { }

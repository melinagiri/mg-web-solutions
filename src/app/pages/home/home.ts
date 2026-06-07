import { Component, AfterViewInit } from '@angular/core';
import { Hero }       from '../hero/hero';
import { Stats }      from '../stats/stats';
import { About }      from '../about/about';
import { Services }   from '../services/services';
import { Pricing }    from '../pricing/pricing';
import { Process }    from '../process/process';
import { Experience } from '../experience/experience';
import { Portfolio }  from '../portfolio/portfolio';
import { Contact }    from '../contact/contact';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero, Stats, About, Services,
    Pricing, Process, Experience,
    Portfolio, Contact
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollAnim.init(), 50);
  }
}
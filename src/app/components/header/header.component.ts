import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    standalone: false,
    selector: 'spoti-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
      
})

export class HeaderComponent {}
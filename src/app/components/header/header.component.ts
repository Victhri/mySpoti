import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthTokenService } from "../../../services/tokens/auth-token.service";

@Component({
    standalone: false,
    selector: 'spoti-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
      
})

export class HeaderComponent {
    constructor(private authToken: AuthTokenService) {}
    loginToSpotify() {
        window.location.href = this.authToken.getAuthorizationUrl();
    }
}
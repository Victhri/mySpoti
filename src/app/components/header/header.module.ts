import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [RouterLink]
})

export class HeaderModule {}
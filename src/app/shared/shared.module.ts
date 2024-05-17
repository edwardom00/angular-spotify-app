import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayeComponent } from './components/media-playe/media-playe.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
    declarations: [
        SideBarComponent,
        MediaPlayeComponent,
        HeaderUserComponent,
        CardPlayerComponent,
        SectionGenericComponent,
        PlayListHeaderComponent, // Declara el componente
        PlayListBodyComponent, // Declara el componente
    ],
    exports: [
        SideBarComponent,
        MediaPlayeComponent,
        HeaderUserComponent,
        CardPlayerComponent,
        SectionGenericComponent,
        PlayListHeaderComponent, //Se añade
        PlayListBodyComponent,
        OrderListPipe //Se agrega
    ],
    imports: [CommonModule,
        RouterModule, //Se agrega para usar la directiva RouterLink
        OrderListPipe, //NUEVO
        ImgBrokenDirective //NUEVO
       ]
})
export class SharedModule {}

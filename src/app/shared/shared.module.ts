import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayeComponent } from './components/media-playe/media-playe.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';

@NgModule({
  declarations: [SideBarComponent, MediaPlayeComponent, HeaderUserComponent,CardPlayerComponent,SectionGenericComponent],
  imports: [CommonModule],
  exports: [SideBarComponent, MediaPlayeComponent, HeaderUserComponent,CardPlayerComponent,SectionGenericComponent],
})
export class SharedModule {}

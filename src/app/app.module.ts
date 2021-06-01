import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { CoursesComponent } from './courses/courses.component';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    NavmenuComponent,
    CoursesComponent,
    SectionComponent,
    CardComponent,
    FooterComponent,
    FabComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

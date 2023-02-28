import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CountsComponent } from './counts/counts.component';
import { ClientsComponent } from './clients/clients.component';
import { Services2Component } from './services2/services2.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamsComponent } from './teams/teams.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    SkillsComponent,
    CountsComponent,
    ClientsComponent,
    Services2Component,
    TestimonialsComponent,
    PortfolioComponent,
    TeamsComponent,
    PricingComponent,
    FaqComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

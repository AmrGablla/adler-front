import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { QuizContentComponent } from './quiz-content/quiz-content.component';
import { SharedModule } from './shared/shared.module';
import { SupervisorComponent } from './supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuizContentComponent,
    SupervisorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

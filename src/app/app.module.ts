import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoDataService } from './todo-data.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ApiService } from './api.service';
import { TimerComponent } from './timer/timer.component';
import { TimerCountdownComponent } from './timer-countdown/timer-countdown.component';
import { TimerLabelComponent } from './timer-label/timer-label.component';
import { TimerButtonComponent } from './timer-button/timer-button.component';
import { TimeDisplayPipe } from './time-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    TimerComponent,
    TimerCountdownComponent,
    TimerLabelComponent,
    TimerButtonComponent,
    TimeDisplayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

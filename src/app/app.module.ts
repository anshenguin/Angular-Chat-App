import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoMaterialModule } from './material-module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoMaterialModule ],
  declarations: [ AppComponent, HelloComponent, ChatListComponent, ChatWindowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

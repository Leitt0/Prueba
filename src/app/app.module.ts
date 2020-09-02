import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './components/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'

//COMPONENTS
import { AppComponent } from './components/app/app.component';
import { GetaplaceholderComponent } from './components/getaplaceholder/getaplaceholder.component';
import { HeaderComponent } from './components/header/header.component';
import { GetPorIdComponent } from './components/get-por-id/get-por-id.component';
import { NewPostComponent } from './components/new-post/new-post.component';


@NgModule({
  declarations: [
    AppComponent,
    GetaplaceholderComponent,
    HeaderComponent,
    GetPorIdComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

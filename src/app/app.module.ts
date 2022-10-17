import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SimpleScriptsComponent } from './simple-scripts/simple-scripts.component';
import { DescriptionComponent } from './description/description.component';
import { LoopsFourComponent } from './loops-four/loops-four.component';
import { EventsThirdComponent } from './events-third/events-third.component';
import { MethodsFifthComponent } from './methods-fifth/methods-fifth.component';
import { ArraySixthComponent } from './array-sixth/array-sixth.component';
import { ControlsSeventhComponent } from './controls-seventh/controls-seventh.component';
import { FormsEighthComponent } from './forms-eighth/forms-eighth.component';
import { ImageNineComponent } from './image-nine/image-nine.component';
import { LocalstorageTenComponent } from './localstorage-ten/localstorage-ten.component';
import { AdditionalTenComponent } from './additional-ten/additional-ten.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "lab2", component: SimpleScriptsComponent},
      {path: "lab3", component: EventsThirdComponent},
      {path: "lab4", component: LoopsFourComponent},
      {path: "lab5", component: MethodsFifthComponent},
      {path: "lab6", component: ArraySixthComponent},
      {path: "lab7", component: ControlsSeventhComponent},
      {path: "lab8", component: FormsEighthComponent},
      {path: "lab9", component: ImageNineComponent},
      {path: "lab10", component: LocalstorageTenComponent},
      {path: "lab10A", component: AdditionalTenComponent},
      {path: "", component: DescriptionComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SimpleScriptsComponent,
    DescriptionComponent,
    LoopsFourComponent,
    EventsThirdComponent,
    MethodsFifthComponent,
    ArraySixthComponent,
    ControlsSeventhComponent,
    FormsEighthComponent,
    ImageNineComponent,
    LocalstorageTenComponent,
    AdditionalTenComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

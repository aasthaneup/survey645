import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TestService } from './test.service';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ListAllSurveysComponent } from './list-all-surveys/list-all-surveys.component';
import { ViewSurveyComponent } from './view-survey/view-survey.component';



@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    ListAllSurveysComponent,
    ViewSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'survey-form',
        component: SurveyFormComponent
      },
      {
        path: 'list-all-surveys',
        component: ListAllSurveysComponent
      },
      {
        path: 'view-survey',
        component: ViewSurveyComponent
      }
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

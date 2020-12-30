import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { NgbModule, NgbToastModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { sharedPipes } from './pipes';
// import { sharedGuards } from './guards';


@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbModalModule,
    NgbToastModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [
  ],
  exports: [
    ...sharedComponents,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
  ],
  providers: [
  ]
})
export class SharedModule { }

// Translator Method
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


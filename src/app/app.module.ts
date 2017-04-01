import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { LocalStorageModule } from 'angular-2-local-storage';

import { ControlMessagesComponent } from './control-messages.component';

import { ValidationService } from './services/validation.service';
import { DataService } from './services/data.service';
import { RequestService } from './services/request.service';
import { ItemsService } from './services/items.service';
import { FilterService } from './services/filter.service';
import { CategoryService } from './services/category.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { TableNavigationService } from './services/table-navigation.service';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { SearchPipe } from './search/search.pipe';

import { NavigationComponent } from './navigation/navigation.component';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { GlobalSearchItemsComponent } from './global-search-items/global-search-items.component';
import { ClubUsersComponent } from './club-users/club-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlMessagesComponent,
    HomeComponent,

    StartingPageComponent,
    GoogleSigninComponent,
    ProfileComponent,
    CategoriesComponent,
    SearchPipe,
    NavigationComponent,

    CategoryItemsComponent,
    GlobalSearchComponent,
    GlobalSearchItemsComponent,
    ClubUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    routing,
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'sessionStorage'})
  ],
  providers: [
    ValidationService,
    RequestService,
    DataService,
    ItemsService,
    TableNavigationService,
    FilterService,
    CategoryService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

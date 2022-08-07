import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostauthRoutingModule } from './postauth-routing.module';
import { PostauthLayoutComponent } from './postauth-layout.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavModule } from '../layout/sidenav/sidenav.module';


@NgModule({
  declarations: [
    PostauthLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    PostauthRoutingModule,
   SidenavModule
  ]
})
export class PostauthModule { }

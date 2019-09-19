import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { MatTableModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDialogModule ,
    MatBadgeModule


  ],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDialogModule,
    MatBadgeModule

  ]
})
export class SharedModule { }

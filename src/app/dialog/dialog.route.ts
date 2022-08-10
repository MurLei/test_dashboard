import { DialogComponent } from './dialog.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



const dialogRoute: Routes = [{path: 'dialog', component: DialogComponent}];
export const dialogRouting: ModuleWithProviders<any> = RouterModule.forChild(dialogRoute)
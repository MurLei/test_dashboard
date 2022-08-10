import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



const userRoute: Routes = [{path: '', component: UsersComponent}];
export const userRouting: ModuleWithProviders<any> = RouterModule.forChild(userRoute)
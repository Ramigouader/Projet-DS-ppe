import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },{ path: 'contact', component: ContactComponent },{ path: 'products', component: ProductsComponent },{ path: 'filter', component: FilterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';


const routes: Routes = [
  {
    path: 'products', component: ProductComponent, children: [
      { path: 'details/:id', component: ProductDetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent },
    ]
  },
  {
    path: 'reviews', component: ReviewComponent, children: [
      { path: 'details/:id', component: ReviewDetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllreviewsComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

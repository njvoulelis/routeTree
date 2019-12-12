import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { ProdManService } from './prod-man.service';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';
import { ReviewComponent } from './review/review.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailComponent,
    PagenotfoundComponent,
    ProductDetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewDetailComponent,
    AuthorComponent,
    AllreviewsComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProdManService],
  bootstrap: [AppComponent]
})
export class AppModule { }

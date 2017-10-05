import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app specific imports
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { DirectiveComponent } from './directive/directive.component';
import { ComponentComponent } from './component/component.component';
import { AdminComponent } from './admin/admin.component';
import { HelpComponent } from './admin/help/help.component';
import { OwmComponent } from './service/geo/owm/owm.component';
import { YoutubeComponent } from './service/media/youtube/youtube.component';
import { CountryComponent } from './service/info/country/country.component';
import { JsonTestComponent } from './service/info/json-test/json-test.component';
import { AgmCoreModule } from '@agm/core';
import { MathComponent } from './service/math/math.component';
import { GeobytesComponent } from './service/geo/geobytes/geobytes.component';
import { Ttt1Component } from './apps/fun/ttt-1/ttt-1.component';
import { Blog1Component } from './component/blog-1/blog-1.component';
import { PomodoroComponent } from './apps/util/pomodoro/pomodoro.component';
import { CalculatorComponent } from './apps/util/calculator/calculator.component';
import { AppsComponent } from './apps/apps.component';
import { BadgeComponent } from './apps/badge/badge.component';
import { TwitchTvComponent } from './service/media/twitch-tv/twitch-tv.component';
import { WikiComponent } from './service/info/wiki/wiki.component';
import { WeatherCardComponent } from './apps/util/weather-card/weather-card.component';
import { FlickrComponent } from './service/media/flickr/flickr.component';
import { GmapComponent } from './component/gmap/gmap.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { QuoteComponent } from './component/quote/quote.component';
import { StackComponent } from './service/info/stack/stack.component';
import { AnimationComponent } from './animation/animation.component';
import { ChartsModule } from 'ng2-charts';
import { AlphaVantageComponent } from './service/stock/alpha-vantage/alpha-vantage.component';
import { QuandlComponent } from './service/stock/quandl/quandl.component';
import { FundamentalComponent } from './service/stock/fundamental/fundamental.component';
import { MarkitComponent } from './service/stock/markit/markit.component';
import { AlchemyComponent } from './service/info/alchemy/alchemy.component';
import { SimonComponent } from './apps/fun/simon/simon.component';
import { MovieComponent } from './service/media/movie/movie.component';
import { CssBasicComponent } from './animation/css-basic/css-basic.component';
import { CssAdvComponent } from './animation/css-adv/css-adv.component';
import { TheysayComponent } from './service/quote/theysay/theysay.component';
import { RandomComponent } from './service/quote/random/random.component';
import { BasicComponent } from './directive/client/basic/basic.component';
import { BasicDirective } from './directive/directive/basic.directive';
import { BarchartComponent } from './service/stock/barchart/barchart.component';
import { UtilComponent } from './apps/util/util.component';
import { FunComponent } from './apps/fun/fun.component';
import { ReferenceComponent } from './reference/reference.component';
import { ApiComponent } from './reference/api/api.component';
import { LibComponent } from './reference/lib/lib.component';
import { TipComponent } from './reference/tip/tip.component';
import { AutogrowDirective } from './directive/directive/autogrow.directive';
import {NgBasicComponent} from './animation/ng-basic/ng-basic.component';
import {NgAdvComponent} from './animation/ng-adv/ng-adv.component';
import {AppRoutes} from './app-routes';
import { CompCommComponent } from './reference/comp-comm/comp-comm.component';
import { ChooserComponent } from './reference/comp-comm/chooser/chooser.component';
import { ViewerComponent } from './reference/comp-comm/viewer/viewer.component';
import { ColorSampleComponent } from './reference/comp-comm/color-sample/color-sample.component';
import { CollapsableDirective } from './directive/directive/collapsable.directive';
import { ZoomHoverDirective } from './directive/directive/zoom-hover.directive';
import { GithubComponent } from './service/info/github/github.component';
import { BookComponent } from './reference/book/book.component';
import { ConceptComponent } from './reference/concept/concept.component';
import { BindingComponent } from './reference/binding/binding.component';
import { RefioComponent } from './reference/refio/refio.component';
import { RefmiscComponent } from './reference/refmisc/refmisc.component';
import { RefrouteComponent } from './reference/refroute/refroute.component';
import { RefdiComponent } from './reference/refdi/refdi.component';
import { RefsvcComponent } from './reference/refsvc/refsvc.component';
import { ReftdfComponent } from './reference/reftdf/reftdf.component';
import { TdfComponent } from './component/tdf/tdf.component';
import { DrtvComponent } from './reference/drtv/drtv.component';
import { NgClassStyleComponent } from './reference/advanced/ng-class-style/ng-class-style.component';
import { CustomComponent } from './reference/drtv/custom/custom.component';

@NgModule({
  declarations: [
    AppComponent, ServiceComponent, DirectiveComponent, ComponentComponent, AdminComponent,
    HelpComponent, OwmComponent, YoutubeComponent, CountryComponent, JsonTestComponent,
    MathComponent, GeobytesComponent, Ttt1Component, Blog1Component, PomodoroComponent,
    CalculatorComponent, AppsComponent, BadgeComponent, TwitchTvComponent, WikiComponent,
    WeatherCardComponent, FlickrComponent, GmapComponent, QuoteComponent, StackComponent,
    AnimationComponent, NgBasicComponent, AlphaVantageComponent, QuandlComponent,
    FundamentalComponent, MarkitComponent, NgAdvComponent, AlchemyComponent, SimonComponent,
    MovieComponent, CssBasicComponent, CssAdvComponent, TheysayComponent, RandomComponent,
    BasicComponent, BasicDirective, BarchartComponent, UtilComponent, FunComponent, ReferenceComponent,
    ApiComponent, LibComponent, TipComponent, AutogrowDirective, NgBasicComponent, NgAdvComponent,
    CompCommComponent, ChooserComponent, ViewerComponent, ColorSampleComponent,
    CollapsableDirective, ZoomHoverDirective, GithubComponent, BookComponent, ConceptComponent,
    BindingComponent, RefioComponent, RefmiscComponent, RefrouteComponent,
    RefdiComponent, RefsvcComponent, ReftdfComponent, TdfComponent, DrtvComponent, NgClassStyleComponent, CustomComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(AppRoutes), FormsModule, HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKJ_dhkJW0VQEIzQ2P7seGGg4CMCN5iuY', // from google
      libraries: ['places']
    }),
    ReactiveFormsModule, JsonpModule, Ng4GeoautocompleteModule.forRoot(),
    BrowserAnimationsModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

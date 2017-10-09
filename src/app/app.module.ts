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
import { Blog1Component } from './component/basic/blog-1/blog-1.component';
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
import { FunComponent } from './apps/fun/fun.component';
import { ReferenceComponent } from './reference/reference.component';
import { ApiComponent } from './reference/foundation/service/api/api.component';
import { AutogrowDirective } from './directive/directive/autogrow.directive';
import {NgBasicComponent} from './animation/ng-basic/ng-basic.component';
import {NgAdvComponent} from './animation/ng-adv/ng-adv.component';
import {AppRoutes} from './app-routes';
import { CompCommComponent } from './component/basic/comp-comm/comp-comm.component';
import { ChooserComponent } from './component/basic/comp-comm/chooser/chooser.component';
import { ViewerComponent } from './component/basic/comp-comm/viewer/viewer.component';
import { ColorSampleComponent } from './component/basic/comp-comm/color-sample/color-sample.component';
import { CollapsableDirective } from './directive/directive/collapsable.directive';
import { ZoomHoverDirective } from './directive/directive/zoom-hover.directive';
import { GithubComponent } from './service/info/github/github.component';
import { BookComponent } from './reference/advanced/book/book.component';
import { BindingComponent } from './reference/foundation/binding/binding.component';
import { RefioComponent } from './reference/foundation/binding/refio/refio.component';
import { RefmiscComponent } from './reference/advanced/refmisc/refmisc.component';
import { RefrouteComponent } from './reference/foundation/routing/refroute/refroute.component';
import { RefdiComponent } from './reference/advanced/refdi/refdi.component';
import { RefsvcComponent } from './reference/foundation/service/refsvc/refsvc.component';
import { ReftdfComponent } from './reference/form/reftdf/reftdf.component';
import { TdfComponent } from './component/basic/tdf/tdf.component';
import { DrtvComponent } from './reference/foundation/directive/drtv.component';
import { NgClassStyleComponent } from './reference/advanced/ng-class-style/ng-class-style.component';
import { CustomComponent } from './reference/foundation/directive/custom/custom.component';
import { Ref1Component } from './component/basic/ref1/ref1.component';
import { TriggerComponent } from './reference/foundation/animation/trigger/trigger.component';
import { HotColdComponent } from './apps/fun/hot-cold/hot-cold.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartComponent } from './component/adv/highchart/highchart.component';
import { ChartjsComponent } from './component/adv/chartjs/chartjs.component';
import { MtShastaComponent } from './apps/travel/mt-shasta/mt-shasta.component';
import { PlaceComponent } from './apps/travel/mt-shasta/place/place.component';
import { DirectionComponent } from './apps/travel/mt-shasta/direction/direction.component';
import { HouseComponent } from './apps/travel/mt-shasta/house/house.component';
import { ActivityComponent } from './apps/travel/mt-shasta/activity/activity.component';
import { Day1Component } from './apps/travel/mt-shasta/activity/day1/day1.component';
import { Day2Component } from './apps/travel/mt-shasta/activity/day2/day2.component';
import { Day3Component } from './apps/travel/mt-shasta/activity/day3/day3.component';
import { Day4Component } from './apps/travel/mt-shasta/activity/day4/day4.component';
import { AgmDirectionDirective } from './directive/directive/agm-direction.directive';

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
    BasicComponent, BasicDirective, BarchartComponent, FunComponent, ReferenceComponent,
    ApiComponent, AutogrowDirective, NgBasicComponent, NgAdvComponent,
    CompCommComponent, ChooserComponent, ViewerComponent, ColorSampleComponent,
    CollapsableDirective, ZoomHoverDirective, GithubComponent, BookComponent,
    BindingComponent, RefioComponent, RefmiscComponent, RefrouteComponent,
    RefdiComponent, RefsvcComponent, ReftdfComponent, TdfComponent, DrtvComponent,
    NgClassStyleComponent, CustomComponent, Ref1Component, TriggerComponent, HotColdComponent,
    HighchartComponent, ChartjsComponent, MtShastaComponent, PlaceComponent, DirectionComponent, HouseComponent, ActivityComponent, Day1Component, Day2Component, Day3Component, Day4Component, AgmDirectionDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(AppRoutes), FormsModule, HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKJ_dhkJW0VQEIzQ2P7seGGg4CMCN5iuY', // from google
      libraries: ['places']
    }),
    ReactiveFormsModule, JsonpModule, Ng4GeoautocompleteModule.forRoot(),
    BrowserAnimationsModule, ChartsModule, ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

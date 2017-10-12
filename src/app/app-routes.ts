///<reference path='apps/apps.component.ts'/>

import {Routes} from '@angular/router';
import {AppsComponent} from './apps/apps.component';
import {BadgeComponent} from './apps/badge/badge.component';
import {WeatherCardComponent} from './apps/util/weather-card/weather-card.component';
import {CalculatorComponent} from './apps/util/calculator/calculator.component';
import {PomodoroComponent} from './apps/util/pomodoro/pomodoro.component';
import {FunComponent} from './apps/fun/fun.component';
import {Ttt1Component} from './apps/fun/ttt-1/ttt-1.component';
import {SimonComponent} from './apps/fun/simon/simon.component';
import {ComponentComponent} from './component/component.component';
import {GmapComponent} from './component/gmap/gmap.component';
import {Blog1Component} from './component/basic/blog-1/blog-1.component';
import {DirectiveComponent} from './directive/directive.component';
import {BasicComponent} from './directive/client/basic/basic.component';
import {AnimationComponent} from './animation/animation.component';
import {CssBasicComponent} from './animation/css-basic/css-basic.component';
import {CssAdvComponent} from './animation/css-adv/css-adv.component';
import {NgBasicComponent} from './animation/ng-basic/ng-basic.component';
import {NgAdvComponent} from './animation/ng-adv/ng-adv.component';
import {ReferenceComponent} from './reference/reference.component';
import {ApiComponent} from './reference/foundation/service/api/api.component';
import {AppComponent} from './app.component';
import {ServiceComponent} from './service/service.component';
import {OwmComponent} from './service/geo/owm/owm.component';
import {YoutubeComponent} from './service/media/youtube/youtube.component';
import {CountryComponent} from './service/info/country/country.component';
import {MovieComponent} from './service/media/movie/movie.component';
import {TwitchTvComponent} from './service/media/twitch-tv/twitch-tv.component';
import {GeobytesComponent} from './service/geo/geobytes/geobytes.component';
import {FlickrComponent} from './service/media/flickr/flickr.component';
import {StackComponent} from './service/info/stack/stack.component';
import {AlchemyComponent} from './service/info/alchemy/alchemy.component';
import {WikiComponent} from './service/info/wiki/wiki.component';
import {JsonTestComponent} from './service/info/json-test/json-test.component';
import {AlphaVantageComponent} from './service/stock/alpha-vantage/alpha-vantage.component';
import {QuandlComponent} from './service/stock/quandl/quandl.component';
import {FundamentalComponent} from './service/stock/fundamental/fundamental.component';
import {MarkitComponent} from './service/stock/markit/markit.component';
import {BarchartComponent} from './service/stock/barchart/barchart.component';
import {MathComponent} from './service/math/math.component';
import {TheysayComponent} from './service/quote/theysay/theysay.component';
import {QuoteComponent} from './component/quote/quote.component';
import {RandomComponent} from './service/quote/random/random.component';
import {CompCommComponent} from './component/basic/comp-comm/comp-comm.component';
import {GithubComponent} from './service/info/github/github.component';
import {GithubPromiseService} from './tool/info/github-promise.service';
import {BookComponent} from './reference/advanced/book/book.component';
import {BindingComponent} from './reference/foundation/binding/binding.component';
import {RefioComponent} from './reference/foundation/binding/refio/refio.component';
import {RefmiscComponent} from './reference/advanced/refmisc/refmisc.component';
import {RefrouteComponent} from './reference/foundation/routing/refroute/refroute.component';
import {RefdiComponent} from './reference/advanced/refdi/refdi.component';
import {RefsvcComponent} from './reference/foundation/service/refsvc/refsvc.component';
import {ReftdfComponent} from './reference/form/reftdf/reftdf.component';
import {TdfComponent} from './component/basic/tdf/tdf.component';
import {DrtvComponent} from './reference/foundation/directive/drtv.component';
import {NgClassStyleComponent} from './reference/advanced/ng-class-style/ng-class-style.component';
import {CustomComponent} from './reference/foundation/directive/custom/custom.component';
import {Ref1Component} from './component/basic/ref1/ref1.component';
import {HotColdComponent} from './apps/fun/hot-cold/hot-cold.component';
import {HighchartComponent} from './component/adv/highchart/highchart.component';
import {ChartjsComponent} from './component/adv/chartjs/chartjs.component';
import {MtShastaComponent} from './apps/travel/mt-shasta/mt-shasta.component';
import {PlaceComponent} from './apps/travel/mt-shasta/place/place.component';
import {DirectionComponent} from './apps/travel/mt-shasta/direction/direction.component';
import {HouseComponent} from './apps/travel/mt-shasta/house/house.component';
import {ActivityComponent} from './apps/travel/mt-shasta/activity/activity.component';
import {Day1Component} from './apps/travel/mt-shasta/activity/day1/day1.component';
import {Day4Component} from './apps/travel/mt-shasta/activity/day4/day4.component';
import {Day3Component} from './apps/travel/mt-shasta/activity/day3/day3.component';
import {Day2Component} from './apps/travel/mt-shasta/activity/day2/day2.component';
import {AdminComponent} from './admin/admin.component';
import {HelpComponent} from './admin/help/help.component';
import {HomeComponent} from './home/home.component';
import {AnimComponent} from './reference/foundation/anim/anim.component';
import {MdfComponent} from './component/basic/mdf/mdf.component';
import {RefMdfComponent} from './reference/form/ref-mdf/ref-mdf.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apps', component: AppsComponent, children: [
    { path: 'badge', component: BadgeComponent },
    { path: 'util', children: [
      { path: 'weather-card', component: WeatherCardComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'pomodoro', component: PomodoroComponent },
    ]},
    { path: 'travel', children: [
      { path: 'mt-shasta', component: MtShastaComponent, children: [
        { path: 'place', component: PlaceComponent },
        { path: 'direction', component: DirectionComponent },
        { path: 'house', component: HouseComponent },
        { path: 'activity', component: ActivityComponent, children: [
          { path: 'day1', component: Day1Component },
          { path: 'day2', component: Day2Component },
          { path: 'day3', component: Day3Component },
          { path: 'day4', component: Day4Component },
        ] },
      ] }
    ]},

    { path: 'fun', children: [
      { path: 'ttt-1', component: Ttt1Component },
      { path: 'hot-cold', component: HotColdComponent },
      { path: 'simon', component: SimonComponent }
    ]}
  ] },
  { path: 'component', component: ComponentComponent, children: [
    { path: 'basic', children: [
      { path: 'tdf', component: TdfComponent },
      { path: 'mdf', component: MdfComponent },
      { path: 'ref-1', component: Ref1Component },
      { path: 'blog-1', component: Blog1Component },
      { path: 'comp-comm', component: CompCommComponent },
    ]},
    { path: 'adv', children: [
      { path: 'gmap', component: GmapComponent },
      { path: 'highcharts', component: HighchartComponent },
      { path: 'chartjs', component: ChartjsComponent },
      { path: 'opd-popup', component: GmapComponent },
    ]},
  ] },
  { path: 'service', component: ServiceComponent, data: { title: 'Service Tab' },
    children: [
      { path: 'owm', component: OwmComponent },
      { path: 'youtube', component: YoutubeComponent },
      { path: 'country', component: CountryComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'twitch', component: TwitchTvComponent },
      { path: 'geobytes', component: GeobytesComponent },
      { path: 'flickr', component: FlickrComponent },
      { path: 'stack', component: StackComponent },
      { path: 'git', component: GithubComponent },
      { path: 'git-promise', component: GithubPromiseService },
      { path: 'alchemy', component: AlchemyComponent },
      { path: 'wiki', component: WikiComponent },
      { path: 'json-test', component: JsonTestComponent },

      { path: 'alpha-vantage', component: AlphaVantageComponent },
      { path: 'quandl', component: QuandlComponent },
      { path: 'fundamental', component: FundamentalComponent },
      { path: 'markit', component: MarkitComponent },
      { path: 'barchart', component: BarchartComponent },

      { path: 'math', component: MathComponent },
      { path: 'they-say', component: TheysayComponent },
      { path: 'famous-quote', component: QuoteComponent },
      { path: 'forismatic', component: RandomComponent },
    ],
  },
  { path: 'directive', component: DirectiveComponent, children: [
    { path: 'basic', component: BasicComponent }
  ] },
  { path: 'animation', component: AnimationComponent, children: [
    { path: 'css-basic', component: CssBasicComponent },
    { path: 'css-adv', component: CssAdvComponent },
    { path: 'ng-basic', component: NgBasicComponent },
    { path: 'ng-adv', component: NgAdvComponent }
  ]},
  { path: 'reference', component: ReferenceComponent, children: [
    { path: 'api', component: ApiComponent },
    { path: 'book', component: BookComponent },
    { path: 'ref-io', component: RefioComponent },
    { path: 'ref-binding', component: BindingComponent },
    { path: 'ref-route', component: RefrouteComponent },
    { path: 'ref-di', component: RefdiComponent },
    { path: 'ref-svc', component: RefsvcComponent },
    { path: 'ref-tdf', component: ReftdfComponent },
    { path: 'ref-mdf', component: RefMdfComponent },
    { path: 'ref-directive', component: DrtvComponent },
    { path: 'ref-misc', component: RefmiscComponent },
    { path: 'ref-anim', component: AnimComponent },
    { path: 'directive', children: [
      { path: 'custom', component: CustomComponent }
    ]},
    { path: 'adv', children: [
      { path: 'class-style', component: NgClassStyleComponent },
    ]},
  ] },
  { path: 'admin', component: AdminComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: HomeComponent }
];

///<reference path='apps/apps.component.ts'/>

import {Routes} from '@angular/router';
import {AppsComponent} from './apps/apps.component';
import {BadgeComponent} from './apps/badge/badge.component';
import {UtilComponent} from './apps/util/util.component';
import {WeatherCardComponent} from './apps/util/weather-card/weather-card.component';
import {CalculatorComponent} from './apps/util/calculator/calculator.component';
import {PomodoroComponent} from './apps/util/pomodoro/pomodoro.component';
import {FunComponent} from './apps/fun/fun.component';
import {Ttt1Component} from './apps/fun/ttt-1/ttt-1.component';
import {SimonComponent} from './apps/fun/simon/simon.component';
import {ComponentComponent} from './component/component.component';
import {GmapComponent} from './component/gmap/gmap.component';
import {Blog1Component} from './component/blog-1/blog-1.component';
import {DirectiveComponent} from './directive/directive.component';
import {BasicComponent} from './directive/client/basic/basic.component';
import {AnimationComponent} from './animation/animation.component';
import {CssBasicComponent} from './animation/css-basic/css-basic.component';
import {CssAdvComponent} from './animation/css-adv/css-adv.component';
import {NgBasicComponent} from './animation/ng-basic/ng-basic.component';
import {NgAdvComponent} from './animation/ng-adv/ng-adv.component';
import {ReferenceComponent} from './reference/reference.component';
import {ApiComponent} from './reference/api/api.component';
import {LibComponent} from './reference/lib/lib.component';
import {TipComponent} from './reference/tip/tip.component';
import {AdminComponent} from './admin/admin.component';
import {HelpComponent} from './admin/help/help.component';
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
import {CompCommComponent} from './reference/comp-comm/comp-comm.component';
import {GithubComponent} from './service/info/github/github.component';
import {GithubPromiseService} from './tool/info/github-promise.service';
import {BookComponent} from './reference/book/book.component';
import {BindingComponent} from './reference/binding/binding.component';
import {RefioComponent} from './reference/refio/refio.component';
import {RefmiscComponent} from './reference/refmisc/refmisc.component';
import {RefrouteComponent} from './reference/refroute/refroute.component';
import {RefdiComponent} from './reference/refdi/refdi.component';
import {RefsvcComponent} from './reference/refsvc/refsvc.component';
import {ReftdfComponent} from './reference/reftdf/reftdf.component';
import {TdfComponent} from './component/tdf/tdf.component';
import {DrtvComponent} from './reference/drtv/drtv.component';
import {NgClassStyleComponent} from './reference/advanced/ng-class-style/ng-class-style.component';
import {CustomComponent} from './reference/drtv/custom/custom.component';

export const AppRoutes: Routes = [
  { path: 'apps', component: AppsComponent, children: [
    { path: 'badge', component: BadgeComponent },
    { path: 'util', component: UtilComponent },

    { path: 'weather-card', component: WeatherCardComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'pomodoro', component: PomodoroComponent },

    { path: 'fun', component: FunComponent },
    { path: 'ttt-1', component: Ttt1Component },
    { path: 'simon', component: SimonComponent }
  ] },
  { path: 'component', component: ComponentComponent,
    children: [
      { path: 'gmap', component: GmapComponent },
      { path: 'opd-popup', component: GmapComponent },
      { path: 'blog-1', component: Blog1Component },
      { path: 'tdf', component: TdfComponent },
    ]
  },
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
    { path: 'lib', component: LibComponent },
    { path: 'tip', component: TipComponent },
    { path: 'comp-comm', component: CompCommComponent },
    { path: 'book', component: BookComponent },
    { path: 'ref-io', component: RefioComponent },
    { path: 'ref-binding', component: BindingComponent },
    { path: 'ref-route', component: RefrouteComponent },
    { path: 'ref-di', component: RefdiComponent },
    { path: 'ref-svc', component: RefsvcComponent },
    { path: 'ref-tdf', component: ReftdfComponent },
    { path: 'ref-drtv', component: DrtvComponent },
    { path: 'ref-misc', component: RefmiscComponent },
    { path: 'drtv', children: [
      { path: 'custom', component: CustomComponent }
    ]},
    { path: 'adv', children: [
      { path: 'class-style', component: NgClassStyleComponent },
    ]}
  ] },
  { path: 'admin', component: AdminComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: AppComponent }
];

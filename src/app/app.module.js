"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
// app specific imports
var app_component_1 = require("./app.component");
var service_component_1 = require("./service/service.component");
var directive_component_1 = require("./directive/directive.component");
var component_component_1 = require("./component/component.component");
var admin_component_1 = require("./admin/admin.component");
var help_component_1 = require("./admin/help/help.component");
var owm_component_1 = require("./service/geo/owm/owm.component");
var youtube_component_1 = require("./service/media/youtube/youtube.component");
var country_component_1 = require("./service/info/country/country.component");
var json_test_component_1 = require("./service/info/json-test/json-test.component");
var core_2 = require("@agm/core");
var math_component_1 = require("./service/math/math.component");
var geobytes_component_1 = require("./service/geo/geobytes/geobytes.component");
var ttt_1_component_1 = require("./apps/fun/ttt-1/ttt-1.component");
var blog_1_component_1 = require("./component/blog-1/blog-1.component");
var pomodoro_component_1 = require("./apps/util/pomodoro/pomodoro.component");
var calculator_component_1 = require("./apps/util/calculator/calculator.component");
var apps_component_1 = require("./apps/apps.component");
var badge_component_1 = require("./apps/badge/badge.component");
var twitch_tv_component_1 = require("./service/media/twitch-tv/twitch-tv.component");
var wiki_component_1 = require("./service/info/wiki/wiki.component");
var weather_card_component_1 = require("./apps/util/weather-card/weather-card.component");
var flickr_component_1 = require("./service/media/flickr/flickr.component");
var gmap_component_1 = require("./component/gmap/gmap.component");
var ng4_geoautocomplete_1 = require("ng4-geoautocomplete");
var quote_component_1 = require("./component/quote/quote.component");
var stack_component_1 = require("./service/info/stack/stack.component");
var animation_component_1 = require("./animation/animation.component");
var ng2_charts_1 = require("ng2-charts");
var alpha_vantage_component_1 = require("./service/stock/alpha-vantage/alpha-vantage.component");
var quandl_component_1 = require("./service/stock/quandl/quandl.component");
var fundamental_component_1 = require("./service/stock/fundamental/fundamental.component");
var markit_component_1 = require("./service/stock/markit/markit.component");
var alchemy_component_1 = require("./service/info/alchemy/alchemy.component");
var simon_component_1 = require("./apps/fun/simon/simon.component");
var movie_component_1 = require("./service/media/movie/movie.component");
var css_basic_component_1 = require("./animation/css-basic/css-basic.component");
var css_adv_component_1 = require("./animation/css-adv/css-adv.component");
var theysay_component_1 = require("./service/quote/theysay/theysay.component");
var random_component_1 = require("./service/quote/random/random.component");
var basic_component_1 = require("./directive/client/basic/basic.component");
var basic_directive_1 = require("./directive/directive/basic.directive");
var barchart_component_1 = require("./service/stock/barchart/barchart.component");
var util_component_1 = require("./apps/util/util.component");
var fun_component_1 = require("./apps/fun/fun.component");
var reference_component_1 = require("./reference/reference.component");
var api_component_1 = require("./reference/api/api.component");
var lib_component_1 = require("./reference/lib/lib.component");
var tip_component_1 = require("./reference/tip/tip.component");
var autogrow_directive_1 = require("./directive/directive/autogrow.directive");
var ng_basic_component_1 = require("./animation/ng-basic/ng-basic.component");
var ng_adv_component_1 = require("./animation/ng-adv/ng-adv.component");
var levelOneRoutes = [
    { path: 'apps', component: apps_component_1.AppsComponent, children: [
            { path: 'badge', component: badge_component_1.BadgeComponent },
            { path: 'util', component: util_component_1.UtilComponent },
            { path: 'weather-card', component: weather_card_component_1.WeatherCardComponent },
            { path: 'calculator', component: calculator_component_1.CalculatorComponent },
            { path: 'pomodoro', component: pomodoro_component_1.PomodoroComponent },
            { path: 'fun', component: fun_component_1.FunComponent },
            { path: 'ttt-1', component: ttt_1_component_1.Ttt1Component },
            { path: 'simon', component: simon_component_1.SimonComponent }
        ] },
    { path: 'component', component: component_component_1.ComponentComponent,
        children: [
            { path: 'gmap', component: gmap_component_1.GmapComponent },
            { path: 'blog-1', component: blog_1_component_1.Blog1Component },
        ]
    },
    { path: 'service', component: service_component_1.ServiceComponent, data: { title: 'Service Tab' },
        children: [
            { path: 'owm', component: owm_component_1.OwmComponent },
            { path: 'youtube', component: youtube_component_1.YoutubeComponent },
            { path: 'country', component: country_component_1.CountryComponent },
            { path: 'movie', component: movie_component_1.MovieComponent },
            { path: 'twitch', component: twitch_tv_component_1.TwitchTvComponent },
            { path: 'geobytes', component: geobytes_component_1.GeobytesComponent },
            { path: 'flickr', component: flickr_component_1.FlickrComponent },
            { path: 'stack', component: stack_component_1.StackComponent },
            { path: 'alchemy', component: alchemy_component_1.AlchemyComponent },
            { path: 'wiki', component: wiki_component_1.WikiComponent },
            { path: 'json-test', component: json_test_component_1.JsonTestComponent },
            { path: 'alpha-vantage', component: alpha_vantage_component_1.AlphaVantageComponent },
            { path: 'quandl', component: quandl_component_1.QuandlComponent },
            { path: 'fundamental', component: fundamental_component_1.FundamentalComponent },
            { path: 'markit', component: markit_component_1.MarkitComponent },
            { path: 'barchart', component: barchart_component_1.BarchartComponent },
            { path: 'math', component: math_component_1.MathComponent },
            { path: 'they-say', component: theysay_component_1.TheysayComponent },
            { path: 'famous-quote', component: quote_component_1.QuoteComponent },
            { path: 'forismatic', component: random_component_1.RandomComponent },
        ],
    },
    { path: 'directive', component: directive_component_1.DirectiveComponent, children: [
            { path: 'basic', component: basic_component_1.BasicComponent }
        ] },
    { path: 'animation', component: animation_component_1.AnimationComponent, children: [
            { path: 'css-basic', component: css_basic_component_1.CssBasicComponent },
            { path: 'css-adv', component: css_adv_component_1.CssAdvComponent },
            { path: 'ng-basic', component: ng_basic_component_1.NgBasicComponent },
            { path: 'ng-adv', component: ng_adv_component_1.NgAdvComponent }
        ] },
    { path: 'reference', component: reference_component_1.ReferenceComponent, children: [
            { path: 'api', component: api_component_1.ApiComponent },
            { path: 'lib', component: lib_component_1.LibComponent },
            { path: 'tip', component: tip_component_1.TipComponent },
        ] },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'help', component: help_component_1.HelpComponent },
    { path: '', component: app_component_1.AppComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, service_component_1.ServiceComponent, directive_component_1.DirectiveComponent, component_component_1.ComponentComponent, admin_component_1.AdminComponent,
            help_component_1.HelpComponent, owm_component_1.OwmComponent, youtube_component_1.YoutubeComponent, country_component_1.CountryComponent, json_test_component_1.JsonTestComponent,
            math_component_1.MathComponent, geobytes_component_1.GeobytesComponent, ttt_1_component_1.Ttt1Component, blog_1_component_1.Blog1Component, pomodoro_component_1.PomodoroComponent,
            calculator_component_1.CalculatorComponent, apps_component_1.AppsComponent, badge_component_1.BadgeComponent, twitch_tv_component_1.TwitchTvComponent, wiki_component_1.WikiComponent,
            weather_card_component_1.WeatherCardComponent, flickr_component_1.FlickrComponent, gmap_component_1.GmapComponent, quote_component_1.QuoteComponent, stack_component_1.StackComponent,
            animation_component_1.AnimationComponent, ng_basic_component_1.NgBasicComponent, alpha_vantage_component_1.AlphaVantageComponent, quandl_component_1.QuandlComponent,
            fundamental_component_1.FundamentalComponent, markit_component_1.MarkitComponent, ng_adv_component_1.NgAdvComponent, alchemy_component_1.AlchemyComponent, simon_component_1.SimonComponent,
            movie_component_1.MovieComponent, css_basic_component_1.CssBasicComponent, css_adv_component_1.CssAdvComponent, theysay_component_1.TheysayComponent, random_component_1.RandomComponent,
            basic_component_1.BasicComponent, basic_directive_1.BasicDirective, barchart_component_1.BarchartComponent, util_component_1.UtilComponent, fun_component_1.FunComponent, reference_component_1.ReferenceComponent,
            api_component_1.ApiComponent, lib_component_1.LibComponent, tip_component_1.TipComponent, autogrow_directive_1.AutogrowDirective, ng_basic_component_1.NgBasicComponent, ng_adv_component_1.NgAdvComponent
        ],
        imports: [
            platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(levelOneRoutes), forms_1.FormsModule, http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCKJ_dhkJW0VQEIzQ2P7seGGg4CMCN5iuY',
                libraries: ['places']
            }),
            forms_1.ReactiveFormsModule, http_1.JsonpModule, ng4_geoautocomplete_1.Ng4GeoautocompleteModule.forRoot(),
            animations_1.BrowserAnimationsModule, ng2_charts_1.ChartsModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

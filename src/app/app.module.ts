import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";

import {MyApp} from './app.component';

import {ProfileModal, ProfilePage} from '../pages/profile/profile';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';

import {LoginService} from "../providers/login.service";
import {WelcomePage} from "../pages/welcome/welcome";
import {RegisterPage} from "../pages/register/register";
import {ManageBoardPage} from "../pages/manage-board/manage-board";
import {BoardService} from "../providers/board.service";
import {CurrentBoardPage} from "../pages/current-board/current-board";

@NgModule({
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule
	],
	bootstrap: [IonicApp],
	declarations: [
		MyApp,
		ProfilePage,
		ProfileModal,
		HomePage,
		TabsPage,
		LoginPage,
		WelcomePage,
		RegisterPage,
		ManageBoardPage,
		CurrentBoardPage
	],
	entryComponents: [
		MyApp,
		ProfilePage,
		ProfileModal,
		HomePage,
		TabsPage,
		LoginPage,
		WelcomePage,
		RegisterPage,
		ManageBoardPage,
		CurrentBoardPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		LoginService,
		BoardService,
		{
			provide: ErrorHandler, useClass: IonicErrorHandler
		}
	]
})
export class AppModule {
}

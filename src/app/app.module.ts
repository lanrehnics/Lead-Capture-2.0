import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { Dashboard } from '../pages/dashboard/dashboard';
import { List } from '../pages/list/list';
import { Scan } from '../pages/scan/scan';
import { Device } from '../pages/device/device';
import { Settings } from '../pages/settings/settings';
import { UserModal } from '../pages/device/userModal/userModal';
import { StationModal } from '../pages/device/stationModal/stationModal';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Dashboard,
    List,
    Scan,
    Device,
    Settings,
    UserModal,
    StationModal
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode : 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Dashboard,
    List,
    Scan,
    Device,
    Settings,
    UserModal,
    StationModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

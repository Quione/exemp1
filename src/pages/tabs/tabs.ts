import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SlidePage} from '../slide/slide';
import { Exemp1Page } from '../exemp1/exemp1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SlidePage;
  tab5Root = Exemp1Page;

  constructor() {

  }
}

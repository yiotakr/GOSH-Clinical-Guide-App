import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { TemplateSliderPage } from '../template-slider/template-slider';
import { SafetyToolkitMorePage } from '../safety-toolkit-more/safety-toolkit-more';
import { registerModuleFactory } from '../../../node_modules/@angular/core/src/linker/ng_module_factory_loader';

/**
 * Generated class for the ClinicalQualityProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clinical-quality-projects',
  templateUrl: 'clinical-quality-projects.html',
})
export class ClinicalQualityProjectsPage {


   tools;



   constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiProvider: WpApiProvider) {
     this.wpApiProvider.getClinicalQualityProjects().subscribe( data => {
       console.log(data);
       this.tools = data;
     })
   }


 }

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.presentLoading('Please wait...');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);

  }

  async presentLoading( mensage: string) {
    this.loading = await this.loadingCtrl.create({
      message: mensage,
      //duration: 2000
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}

import { Component } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });

    this.getData();
  }

  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=d4b551cb0e2040a5bfe3ab8e2e5648d8';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-us', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-us', '', 'SGD');
      console.log('SGD : ' + sgd2);
      var row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-us', '', 'BND');
      console.log('BND : ' + bnd2);
      var row = [3, 'BND', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-us', '', 'HKD');
      console.log('HKD : ' + hkd2);
      var row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-us', '', 'BTC');
      console.log('BTC : ' + btc2);
      var row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var krw = rates.IDR / rates.KRW;
      var krw2 = formatCurrency(krw, 'en-us', '', 'KRW');
      console.log('KRW : ' + krw2);
      var row = [6, 'KRW', krw2];
      this._table1.row.add(row);

      var jpy = rates.IDR / rates.JPY;
      var jpy2 = formatCurrency(jpy, 'en-us', '', 'JPY');
      console.log('JPY : ' + jpy2);
      var row = [7, 'JPY', jpy2];
      this._table1.row.add(row);

      var aud = rates.IDR / rates.AUD;
      var aud2 = formatCurrency(aud, 'en-us', '', 'AUD');
      console.log('AUD : ' + aud2);
      var row = [8, 'AUD', aud2];
      this._table1.row.add(row);

      var cny = rates.IDR / rates.CNY;
      var cny2 = formatCurrency(cny, 'en-us', '', 'CNY');
      console.log('CNY : ' + cny2);
      var row = [9, 'CNY', cny2];
      this._table1.row.add(row);

      var ves = rates.IDR / rates.VES;
      var ves2 = formatCurrency(ves, 'en-us', '', 'VES');
      console.log('VES : ' + ves2);
      var row = [10, 'VES', ves2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}

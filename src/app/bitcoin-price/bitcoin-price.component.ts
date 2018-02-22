import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../bitcoin.service';


@Component({
  selector: 'app-bitcoin-price',
  templateUrl: './bitcoin-price.component.html',
  styleUrls: ['./bitcoin-price.component.scss']
})
export class BitcoinPriceComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {
  }

  ngOnInit() {
  }
// AIzaSyAgqmITgYzFDV_NzMYV4NBLLXkV17Fm-2g
  get price() {
    return this.bitcoinService.state.price;
  }
}

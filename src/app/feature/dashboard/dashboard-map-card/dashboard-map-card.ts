import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

// models
import {  CountryStats } from '../../../models/dashboard/country-stats';

// 3rd party
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map-card',
  templateUrl: './dashboard-map-card.html',
  styleUrls: ['./dashboard-map-card.css'],
})
export class MapCardComponent implements OnInit, OnDestroy {

  public data: CountryStats[];
  // public yesterdayData: YesterdayStats;

  public updatedAt: string;

  map: google.maps.Map;
  zoom = 3;
  // PH lat: "12.879721", longitude: "121.774017"
  // this.center = { lat: 12.879721, lng: 121.774017 };
  center: google.maps.LatLngLiteral  = { lat: 12.879721, lng: 121.774017 };;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'terrain',
    mapTypeControl: false,
    streetViewControl: false,
    keyboardShortcuts: false,
    fullscreenControl: false
  };


  @ViewChild('gmap') gmap: GoogleMap;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const that = this;
    this.dashboardService.state$
      .pipe(
        map(state => state.globalData),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(response => {
        that.data = response as CountryStats[];
        that.updatedAt = that.data.find(item => item.country === 'Philippines').updatedAt;
        that.drawPolygons();
      });


    // dynamic centering:
    // navigator.geolocation.getCurrentPosition(position => { this.center = { lat: position.coords.latitude, lng: position.coords.longitude} });

  }



  drawPolygons() {
    const map = this.gmap.googleMap;
    // {country: "Philippines", county: null, updatedAt: "2020-08-12 04:27:29", stats: {…}, coordinates: {…}, …}
    this.data.forEach(item => {
      const c = new google.maps.LatLng(parseFloat(item.coordinates.latitude), parseFloat(item.coordinates.longitude));
      const cityCircle = new google.maps.Circle({
        strokeColor: '#e00d0d',
        strokeOpacity: 0.6,
        strokeWeight: 50 * (item.stats.confirmed / 100000),
        fillColor: '#e00d0d',
        fillOpacity: 0.35,
        center: c,
        map,
        radius: item.stats.confirmed / 10000
      });
    });
  }




  ngOnDestroy(): void {

  }
}



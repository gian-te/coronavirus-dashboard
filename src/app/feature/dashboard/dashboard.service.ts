import { Injectable, OnDestroy } from '@angular/core';


// Core Services
import { Store } from '../../core/store/store';
import { DashboardAppDataService } from '../../core/app-data/dashboard.app-data.service';
import { SpinnerService } from '../../core/spinner/spinner.service';


// Shared Service
import { ConfigurationManagerService } from '../../core/service/configuration-manager.service';


export class DashboardState {
  selectedCountry = '';
  globalData: any;
  allAsOfYesterday: any;
  globalHistoricalData: any;
  allCurrentCountryData: any;
}

@Injectable()
export class DashboardService extends Store<DashboardState> {
  


  constructor(private appDataService: DashboardAppDataService,
              public spinnerService: SpinnerService
  ) {
    super(new DashboardState());

  }

  public getGlobalData(): void {
    this.spinnerService.show();
    this.appDataService.getGlobalCases().subscribe(data => {
        this.setState({
          ...this.state,
          globalData: data,
        });
        this.spinnerService.hide();
      });
  }

  public getGlobalHistoricalData() {
    this.spinnerService.show();
    this.appDataService.getGlobalHistoricalData().subscribe(data => {
        this.setState({
          ...this.state,
          globalHistoricalData: data,
        });
        this.spinnerService.hide();
      });
  }
  
  // global summary without breakdown
  public getAllAsOfYesterday(): void {
     this.spinnerService.show();
     this.appDataService.getAllAsOfYesterday().subscribe(data => {
        this.setState({
          ...this.state,
          allAsOfYesterday: data,
        });
        this.spinnerService.hide();
      });
  }

  // country level breakdown
  public getAllCurrentCountryData() {
    this.spinnerService.show();
    this.appDataService.getAllCurrentCountryData().subscribe(data => {
       this.setState({
         ...this.state,
         allCurrentCountryData: data,
       });
       this.spinnerService.hide();
     });
  }

  // private onNotificationReceived(data: any) {
  //   let notification: Notification = {
  //     id: data.Id,
  //     assetId: data.AssetId,
  //     assetName: data.AssetName,
  //     alertLevelCode: data.AlertLevelCode,
  //     description: data.Description,
  //     receiveTime: data.ReceiveTime,
  //     isRead: data.IsRead,
  //     level: 2,
  //   };

  //   this.setState({
  //     ...this.state,
  //     notification: notification,
  //   });
  // }

  // public getTreeNode(): void {
  //   this.logManagerService.Log('getting tree node!');
  //   this.subs.sink = this.appDataService.getTreeData().subscribe(data => {
  //     this.setState({
  //       ...this.state,
  //       rawTreeData: data,
  //     });
  //   });
  // }

  // // alert message card
  // public setSelectedMessageId(nodeId: string): void {
  //   this.setState({
  //     ...this.state,
  //     selectedMessage: nodeId
  //   });
  // }

  // public getAssetByMessageId(nodeId: string): void {
  //   if (nodeId) {
  //     this.spinnerService.show();
  //     this.subs.sink = this.appDataService.getAssetByMessageId(nodeId).subscribe(
  //       data => {
  //         this.setState({
  //           ...this.state,
  //           asset: data,
  //         });
  //         this.spinnerService.hide();
  //       }
  //     );
  //   }
  // }

  // public getAsset(nodeId: string): void {
  //   if (nodeId) {
  //     this.spinnerService.show();
  //     this.subs.sink = this.appDataService.getAsset(nodeId).subscribe(
  //       data => {
  //         this.setState({
  //           ...this.state,
  //           asset: data,
  //         });
  //         this.spinnerService.hide();
  //       }
  //     );
  //   }
  // }

  // public getMessage(nodeId: string): void {
  //   if (nodeId != null) {
  //     this.spinnerService.show();
  //     this.subs.sink = this.appDataService.getMessageById(nodeId).subscribe(data => {
  //       data.id = nodeId;
  //       this.setState({
  //         ...this.state,
  //         message: data,
  //       });
  //       this.spinnerService.show();
  //     });
  //   }
  // }

  // public suppressRule(assetId: string, ruleId: string, messageId: string): void {
  //   if (ruleId != null) {
  //     this.spinnerService.show();
  //     this.subs.sink = this.appDataService.suppressRule(assetId, ruleId).subscribe(data => {
  //       if (this.state.selectedMessage == messageId) {
  //         this.getMessage(messageId);
  //       }
  //       this.spinnerService.hide();
  //     });
  //   }
  // }

  // public unsuppressRule(assetId: string, ruleId: string, messageId: string): void {
  //   if (ruleId) {
  //     this.spinnerService.show();
  //     this.subs.sink = this.appDataService.unsuppressRule(assetId, ruleId).subscribe(data => {
  //       if (this.state.selectedMessage == messageId) {
  //         this.getMessage(messageId);
  //       }
  //       this.spinnerService.hide();
  //     });
  //   }
  // }

  // public markMessageAsRead(messageId: string): Observable<any> {
  //   if (messageId) {
  //     return this.appDataService.markMessageAsRead(messageId);
  //   }
  // }

  // public Reset(): any {
  //   this.setState({
  //     ...this.state,
  //     notification: null,
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  //   this.setState({
  //     selectedMessage: '',
  //     message: null,
  //     notification: null,
  //     rawTreeData: new Object(),
  //     asset: null,
  //     indexMap: new Array<NGMTreeIndexMap>(),
  //     });
  // }
}

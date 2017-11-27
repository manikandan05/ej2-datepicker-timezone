import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-ng-calendars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  //instance creation
  @ViewChild('datepickerInstance') datePicker: DatePickerComponent;
  title = 'app';
  public value: Date = new Date();
  ngAfterViewInit(): void {
    // based on system time zone display format will be changed
    this.datePicker.format = this.getTimezoneName();
  }

  getTimezoneName(): string {
    //based on summer and winter offset the timezone value will calculated (here 2017 is a dummy year fr calculating time zones)
    var timeSummer = new Date(Date.UTC(2017, 6, 30, 0, 0, 0, 0));
    var summerOffset = -1 * timeSummer.getTimezoneOffset();
    var timeWinter = new Date(Date.UTC(2017, 12, 30, 0, 0, 0, 0));
    var winterOffset = -1 * timeWinter.getTimezoneOffset();
    var displayFormat, timeZone;

    // the below given display format is assumption format value, you can set the appropriate format to the corresponding time zone
    if (-720 == summerOffset && -720 == winterOffset) { timeZone = 'Dateline Standard Time'; displayFormat = 'MM/dd/yyyy'; }
    else if (0 == summerOffset && 0 == winterOffset) { timeZone = 'Morocco Standard Time'; displayFormat = 'dd-MM-yyyy'; }
    else if (240 == summerOffset && 240 == winterOffset) { timeZone = 'Russian Standard Time'; displayFormat = 'MM.dd.yyyy'; }
    else if (330 == summerOffset && 330 == winterOffset) { timeZone = 'India Standard Time'; displayFormat = 'dd/MM/yyyy'; }
    else if (765 == summerOffset && 825 == winterOffset) { timeZone = 'Pacific/Chatham'; displayFormat = 'MM/dd/yyyy'; }
    else { displayFormat = 'MM/dd/yyyy'; }
    return displayFormat;

    // For your requirement, if you want use the below required timezone to update the date format as like above.

    //if (-720 == summerOffset && -720 == winterOffset) { displayFormat = 'Dateline Standard Time'; }    
    // else if (-660 == summerOffset && -660 == winterOffset) { displayFormat = 'UTC-11'; }
    // else if (-660 == summerOffset && -660 == winterOffset) { displayFormat = 'Samoa Standard Time'; }
    // else if (-660 == summerOffset && -600 == winterOffset) { displayFormat = 'Hawaiian Standard Time'; }
    // else if (-570 == summerOffset && -570 == winterOffset) { displayFormat.value = 'Pacific/Marquesas'; }
    // //                else if (-540 == summerOffset && -600 == winterOffset) { displayFormat.value = 'America/Adak'; }
    // //                else if (-540 == summerOffset && -540 == winterOffset) { displayFormat.value = 'Pacific/Gambier'; }
    // else if (-480 == summerOffset && -540 == winterOffset) { displayFormat = 'Alaskan Standard Time'; }
    // //                else if (-480 == summerOffset && -480 == winterOffset) { displayFormat = 'Pacific/Pitcairn'; }
    // else if (-420 == summerOffset && -480 == winterOffset) { displayFormat = 'Pacific Standard Time'; }
    // else if (-420 == summerOffset && -420 == winterOffset) { displayFormat = 'US Mountain Standard Time'; }
    // else if (-360 == summerOffset && -420 == winterOffset) { displayFormat = 'Mountain Standard Time'; }
    // else if (-360 == summerOffset && -360 == winterOffset) { displayFormat = 'Central America Standard Time'; }
    // //                else if (-360 == summerOffset && -300 == winterOffset) { displayFormat = 'Pacific/Easter'; }
    // else if (-300 == summerOffset && -360 == winterOffset) { displayFormat = 'Central Standard Time'; }
    // else if (-300 == summerOffset && -300 == winterOffset) { displayFormat = 'SA Pacific Standard Time'; }
    // else if (-240 == summerOffset && -300 == winterOffset) { displayFormat = 'Eastern Standard Time'; }
    // else if (-270 == summerOffset && -270 == winterOffset) { displayFormat = 'Venezuela Standard Time'; }
    // else if (-240 == summerOffset && -240 == winterOffset) { displayFormat = 'SA Western Standard Time'; }
    // else if (-240 == summerOffset && -180 == winterOffset) { displayFormat = 'Central Brazilian Standard Time'; }
    // else if (-180 == summerOffset && -240 == winterOffset) { displayFormat = 'Atlantic Standard Time'; }
    // else if (-180 == summerOffset && -180 == winterOffset) { displayFormat = 'Montevideo Standard Time'; }
    // else if (-180 == summerOffset && -120 == winterOffset) { displayFormat = 'E. South America Standard Time'; }
    // else if (-150 == summerOffset && -210 == winterOffset) { displayFormat = 'Mid-Atlantic Standard Time'; }
    // else if (-120 == summerOffset && -180 == winterOffset) { displayFormat = 'America/Godthab'; }
    // else if (-120 == summerOffset && -120 == winterOffset) { displayFormat = 'SA Eastern Standard Time'; }
    // else if (-60 == summerOffset && -60 == winterOffset) { displayFormat = 'Cape Verde Standard Time'; }
    // else if (0 == summerOffset && -60 == winterOffset) { displayFormat = 'Azores Daylight Time'; }
    // else if (0 == summerOffset && 0 == winterOffset) { displayFormat = 'Morocco Standard Time'; }
    // else if (60 == summerOffset && 0 == winterOffset) { displayFormat = 'GMT Standard Time'; }
    // else if (60 == summerOffset && 60 == winterOffset) { displayFormat = 'Africa/Algiers'; }
    // else if (60 == summerOffset && 120 == winterOffset) { displayFormat = 'Namibia Standard Time'; }
    // else if (120 == summerOffset && 60 == winterOffset) { displayFormat = 'Central European Standard Time'; }
    // else if (120 == summerOffset && 120 == winterOffset) { displayFormat = 'South Africa Standard Time'; }
    // else if (180 == summerOffset && 120 == winterOffset) { displayFormat = 'GTB Standard Time'; }
    // else if (180 == summerOffset && 180 == winterOffset) { displayFormat = 'E. Africa Standard Time'; }
    // else if (240 == summerOffset && 180 == winterOffset) { displayFormat = 'Russian Standard Time'; }
    // else if (240 == summerOffset && 240 == winterOffset) { displayFormat = 'Arabian Standard Time'; }
    // else if (270 == summerOffset && 210 == winterOffset) { displayFormat = 'Iran Standard Time'; }
    // else if (270 == summerOffset && 270 == winterOffset) { displayFormat = 'Afghanistan Standard Time'; }
    // else if (300 == summerOffset && 240 == winterOffset) { displayFormat = 'Pakistan Standard Time'; }
    // else if (300 == summerOffset && 300 == winterOffset) { displayFormat = 'West Asia Standard Time'; }
    // else if (330 == summerOffset && 330 == winterOffset) { displayFormat = 'India Standard Time'; }
    // else if (345 == summerOffset && 345 == winterOffset) { displayFormat = 'Nepal Standard Time'; }
    // else if (360 == summerOffset && 300 == winterOffset) { displayFormat = 'N. Central Asia Standard Time'; }
    // else if (360 == summerOffset && 360 == winterOffset) { displayFormat = 'Central Asia Standard Time'; }
    // else if (390 == summerOffset && 390 == winterOffset) { displayFormat = 'Myanmar Standard Time'; }
    // else if (420 == summerOffset && 360 == winterOffset) { displayFormat = 'North Asia Standard Time'; }
    // else if (420 == summerOffset && 420 == winterOffset) { displayFormat = 'SE Asia Standard Time'; }
    // else if (480 == summerOffset && 420 == winterOffset) { displayFormat = 'North Asia East Standard Time'; }
    // else if (480 == summerOffset && 480 == winterOffset) { displayFormat = 'China Standard Time'; }
    // else if (540 == summerOffset && 480 == winterOffset) { displayFormat = 'Yakutsk Standard Time'; }
    // else if (540 == summerOffset && 540 == winterOffset) { displayFormat = 'Tokyo Standard Time'; }
    // else if (570 == summerOffset && 570 == winterOffset) { displayFormat = 'Cen. Australia Standard Time'; }
    // else if (570 == summerOffset && 630 == winterOffset) { displayFormat = 'Australia/Adelaide'; }
    // else if (600 == summerOffset && 540 == winterOffset) { displayFormat = 'Asia/Yakutsk'; }
    // else if (600 == summerOffset && 600 == winterOffset) { displayFormat = 'E. Australia Standard Time'; }
    // else if (600 == summerOffset && 660 == winterOffset) { displayFormat = 'AUS Eastern Standard Time'; }
    // else if (630 == summerOffset && 660 == winterOffset) { displayFormat = 'Australia/Lord_Howe'; }
    // else if (660 == summerOffset && 600 == winterOffset) { displayFormat = 'Tasmania Standard Time'; }
    // else if (660 == summerOffset && 660 == winterOffset) { displayFormat = 'West Pacific Standard Time'; }
    // else if (690 == summerOffset && 690 == winterOffset) { displayFormat = 'Central Pacific Standard Time'; }
    // else if (720 == summerOffset && 660 == winterOffset) { displayFormat = 'Magadan Standard Time'; }
    // else if (720 == summerOffset && 720 == winterOffset) { displayFormat = 'Fiji Standard Time'; }
    // else if (720 == summerOffset && 780 == winterOffset) { displayFormat = 'New Zealand Standard Time'; }
    // else if (765 == summerOffset && 825 == winterOffset) { displayFormat = 'Pacific/Chatham'; }
    // else if (780 == summerOffset && 780 == winterOffset) { displayFormat = 'Tonga Standard Time'; }
    // else if (840 == summerOffset && 840 == winterOffset) { displayFormat = 'Pacific/Kiritimati'; }
    //else { displayFormat = 'US/Pacific'; }
    //return displayFormat;
  }
}

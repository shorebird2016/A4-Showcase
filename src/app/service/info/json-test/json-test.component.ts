import { Component, OnInit } from '@angular/core';
import { JsonTestService } from '../../../tool/util/json-test.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-json-test',
  templateUrl: './json-test.component.html',
  styleUrls: ['./json-test.component.css'],
  providers: [JsonTestService]
})
export class JsonTestComponent implements OnInit {
  constructor(private test_svc: JsonTestService) { }
  IPresponse; headerResponse; dateResponse; timeResponse; echoResponse;
  ngOnInit() {}
  testIpService() {
    this.test_svc.testIpService().subscribe( (res: Response) => {
        const payload = res.json();
        console.log(payload);
        this.IPresponse = payload;
    });
  }
  getIpResponse() { return this.IPresponse ? this.IPresponse.ip : ''; }

  testDateService() {
    this.test_svc.testDateService().subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.dateResponse = payload;
    });
  }
  getDateResponse() { return this.dateResponse ? this.dateResponse.date : ''; }

  testTimeService() {
    this.test_svc.testTimeService().subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.timeResponse = payload;
    });
  }
  getTimeResponse() { return this.timeResponse ? this.timeResponse.time + ' (GMT)' : ''; }

  testEchoService() {
    this.test_svc.testEchoService('Hello', 'World')
      .subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.echoResponse = payload;
    });
  }
  getEchoResponse() { return this.echoResponse ? this.echoResponse : ''; }

  testHederService() {
    this.test_svc.testHeaderService().subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.headerResponse = payload;
    });
  }
  getHeaderResponse() { return this.headerResponse ? this.headerResponse.Accept : ''; }
}

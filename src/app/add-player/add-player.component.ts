import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.sass']
})
export class AddPlayerComponent implements OnInit {
  pname: string;
  player1: string;
  player2: string;
  howout: string;
  howout1: string;
  howout2: string;
  runs: number;
  runs1: number;
  runs2: number;
  error: boolean;
  edit = false;
  addPlayerObj: any = { pname: '', howout: '', runs: '' };
  scoreCardArray = [];
  selectedIndex: number = null;

  constructor() {}

  ngOnInit() {}

  addPlayer1(event) {
    this.player1 = event.target.value;
  }
  addPlayerOut1(event) {
    this.howout1 = event.target.value;
  }
  addPlayerRuns1(event) {
    this.runs1 = event.target.value;
  }
  addPlayer2(event) {
    this.player2 = event.target.value;
  }
  addPlayerOut2(event) {
    this.howout2 = event.target.value;
  }
  addPlayerRuns2(event) {
    this.runs2 = event.target.value;
  }
  addPlayerInfo(pname, howout, runs) {
    console.log('inside addPlayerInfo..............');
    console.log('Player.....', pname);
    console.log('How out.....', howout);
    console.log('runs.....', runs);
    this.player1 = pname;
    this.howout1 = howout;
    this.runs1 = runs;
  }

  addPlayerInfoNew() {
    if (this.edit === true) {
      this.editPlayerInfoNew();
      return;
    }
    console.log('inside addPlayerInfoNew..............', this.addPlayerObj);
    // if (this.pname === '' || this.howout === '' || this.runs == null) {
    //   this.error = true;
    //   return;
    // }
    if (this.addPlayerObj.pname === '' || this.addPlayerObj.howout === ''
    || this.addPlayerObj.runs == null || this.addPlayerObj.runs === '' ) {
      this.error = true;
      return;
    }
    this.scoreCardArray.push(JSON.parse(JSON.stringify(this.addPlayerObj)));
    this.addPlayerObj.pname = '';
    this.addPlayerObj.howout = '';
    this.addPlayerObj.runs = '';
    console.log('this.scoreCardArray......', this.addPlayerObj);
    // this.player1 = this.pname;
    // this.howout1 = this.howout;
    // this.runs1 = this.runs;
    // this.error = false;
  }

  editPlayerInfoNew() {
    console.log('inside editPlayerInfoNew this.addPlayerObj..............', this.addPlayerObj);
    if (this.addPlayerObj.pname === '' || this.addPlayerObj.howout === ''
    || this.addPlayerObj.runs == null || this.addPlayerObj.runs === '' ) {
      this.error = true;
      return;
    }
    console.log('this.scoreCardArray[this.selectedIndex]....', this.scoreCardArray[this.selectedIndex]);
    this.scoreCardArray[this.selectedIndex].pname = this.addPlayerObj.pname;
    this.scoreCardArray[this.selectedIndex].howout = this.addPlayerObj.howout;
    this.scoreCardArray[this.selectedIndex].runs = this.addPlayerObj.runs;
    this.edit = false;
    this.addPlayerObj.pname = '';
    this.addPlayerObj.howout = '';
    this.addPlayerObj.runs = '';
  }

  editScore(index) {
    console.log('editScore index.........', index);
    console.log('editScore index value.........', this.scoreCardArray[index]);
    this.addPlayerObj.pname = this.scoreCardArray[index].pname;
    this.addPlayerObj.howout = this.scoreCardArray[index].howout;
    this.addPlayerObj.runs = this.scoreCardArray[index].runs;
    this.edit = true;
    this.selectedIndex = index;
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(serverName, serverContent){
    this.serverCreated.emit({
      serverName:serverName.value,
      serverContent:serverContent.value
    });
  }

  onAddBlueprint(serverName,serverContent){
    this.blueprintCreated.emit({
      serverName:serverName.value,
      serverContent:serverContent.value
    });
  }
}

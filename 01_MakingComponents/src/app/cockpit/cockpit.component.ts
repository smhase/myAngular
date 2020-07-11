import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;
  @ViewChild('serverNameInput',{static:true}) serverNameInput: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(){
    this.serverCreated.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}

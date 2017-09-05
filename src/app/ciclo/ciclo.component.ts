import { Component, OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, 
  AfterViewInit, AfterViewChecked, AfterContentChecked, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, 
                                        AfterViewInit, AfterViewChecked, AfterContentChecked {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('Construtor');
    
  }

  ngOnChanges() {
    this.log('NgOnChanges');    
  }

  ngOnInit() {
    this.log('NgOnInit');
  }

  ngDoCheck() {
    this.log('NgDoCheck');
  }

  ngOnDestroy() {
    this.log('NgOnDestroy');
  }

  ngAfterContentInit() {
    this.log('NgAfterContentInit');
  }

  ngAfterViewInit() {
    this.log('NgAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('NgAfterViewChecked');
  }

  ngAfterContentChecked() {
    this.log('NgAfterContentChecked');
  }

  private log(hook: string) {
    console.log(hook);
  }
}

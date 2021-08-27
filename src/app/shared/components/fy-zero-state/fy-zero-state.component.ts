import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-fy-zero-state',
  templateUrl: './fy-zero-state.component.html',
  styleUrls: ['./fy-zero-state.component.scss']
})
export class FyZeroStateComponent implements OnInit {
  @Input() image: string;

  @Input() header: string;

  @Input() message: string;

  @Input() submessage: string;

  @Input() link: string;

  // TODO: Remove off when all old zero states are replaced with new ones
  // zero state has a max-width associated with the image.
  // This meant that I couldn't reuse it for the new places without the image appearing very small
  @Input() unscaledImage = false;

  @Input() useNewStyling = false;

  @Output() linkClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onLinkClick(event) {
    this.linkClicked.emit(event);
  }
}

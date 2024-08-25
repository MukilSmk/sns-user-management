import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() errorMessage: string = ''; // Error message to display
  @Output() close = new EventEmitter<void>(); // Event to close the popup

  closePopup(): void {
    this.close.emit(); // Emit the close event when the OK button is clicked
  }
}

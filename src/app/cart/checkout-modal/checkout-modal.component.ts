import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-modal',
  template: `
    <h1 mat-dialog-title>Cart Checked Out</h1>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Close</button>
    </div>
  `
})
export class CheckoutModalComponent {
  constructor(private dialogRef: MatDialogRef<CheckoutModalComponent>) {}

  close(): void {
    this.dialogRef.close();
    window.location.href = '/products'; // Redirect to the main product page
  }
}
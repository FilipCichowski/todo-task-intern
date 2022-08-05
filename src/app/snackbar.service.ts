import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  overlayRef!: OverlayRef;
  renderOverlay(message: string, isSuccessful: boolean) {
    this.overlayRef = this.overlay.create();
    const componentPortal = new ComponentPortal(SnackbarComponent);
    const cmpRef = this.overlayRef.attach(componentPortal);
    cmpRef.instance.message = message;
    cmpRef.instance.isSuccessful = isSuccessful;
    setTimeout(() => {
      this.overlayRef.dispose();
    }, 1500);
  }
  constructor(private overlay: Overlay) {}
}

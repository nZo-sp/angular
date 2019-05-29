import { Component, OnInit } from '@angular/core';

/**
 * Angular permette la creazione di componenti con template e/o stili "inline", senza bisogno
 * di creare file aggiuntivi. In questo caso ho seguito la documentazione per creare dialog:
 * https://material.angular.io/components/dialog/overview
 * 
 * la direttiva cdkFocusInitial permette di impostare il focus in automatico sul bottone
 * 
 * la direttiva mat-dialog-close, se aggiunta a un bottone, permette di chiudere la dialog al click.
 * opzionalmente si possono passare oggetti che saranno resi disponibili ad i sottoscrittori
 * dell'after close
 */
@Component({
  selector: 'app-about-dialog',
  template: `
<h1 mat-dialog-title>About</h1>
<div mat-dialog-content>
  <mat-icon>
    favorite
  </mat-icon>
  <mat-icon>
    favorite
  </mat-icon>
  <mat-icon>
    favorite
  </mat-icon>
  <p>Love DMI!</p>
  <mat-icon>
    favorite
  </mat-icon>
  <mat-icon>
    favorite
  </mat-icon>
  <mat-icon>
    favorite
  </mat-icon>
</div>
<div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>
</div>`,
  styles: ['']
})
export class AboutDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
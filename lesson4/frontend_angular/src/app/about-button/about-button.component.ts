import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';

/**
 * Seguo la documentazione material per l'uso delle dialog:
 * https://material.angular.io/components/dialog/overview
 */
@Component({
  selector: 'app-about-button',
  templateUrl: './about-button.component.html',
  styleUrls: ['./about-button.component.css']
})
export class AboutButtonComponent {
  aboutText = 'About';

  /**
   * Tramite injection mi procuro un istanza di MatDialog
   */
  constructor(public dialog: MatDialog) {

  }

  showAbout() {
    /**
     * La funzione open della dialog vuole il componente da disegnare
     * all'interno della dialog. Il componente è creato da noi e si trova al path
     * '../about-dialog/about-dialog.component.ts'
     */
    const dialogRef = this.dialog.open(AboutDialogComponent, {
      minWidth: '250px'
    });

    /**
     * La funzione open ci torna la referenza all'istanza della dialog creata.
     * Da questo oggetto possiamo sottoscriverci all'evento di "afterClosed"
     * per eseguire del codice alla chiusura della dialog
     */
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
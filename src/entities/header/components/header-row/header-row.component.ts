import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from 'src/features/auth-dialog/components';

@Component({
  selector: 'pw-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderRowComponent {

  title = 'Объятия лап!';
  textTooltip = 'Войти';
  icon = 'login';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AuthDialogComponent, {
      panelClass: 'auth-dialog',
    });
  }
}

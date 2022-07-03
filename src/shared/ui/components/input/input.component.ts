import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, UntypedFormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pw-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
  ],
})
export class InputComponent implements ControlValueAccessor {

  value: string;
  isDisabled: boolean;
  changed!: (value: string) => void;
  touched!: () => void;

  @Input() parentForm!: UntypedFormGroup;
  @Input() fieldName!: string;

  @Input() labelName: string;
  @Input() prefixName: string;
  @Input() typeName: string;
  @Input() placeholderName: string;
  @Input() controlName: string;
  @Input() maskName: string;

  constructor() {
    this.labelName = '';
    this.prefixName = '';
    this.typeName = '';
    this.placeholderName = '';
    this.controlName = '';
    this.maskName = '';
    this.value = '';
    this.isDisabled = true;
  }

  get formField(): UntypedFormControl {
    return this.parentForm?.get( this.fieldName ) as UntypedFormControl;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: () => void): void {
    this.changed = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onChange(event: Event): void {
    const value: string = 
      (<HTMLInputElement>event.target).value;

    this.changed(value);
  }
}

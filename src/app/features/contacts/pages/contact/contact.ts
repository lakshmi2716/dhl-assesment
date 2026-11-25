import { Component, ViewEncapsulation, inject, signal } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Comments, Envelope, MapMarker, Phone } from '@primeicons/angular'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { CheckboxModule } from 'primeng/checkbox'
import { DialogModule } from 'primeng/dialog'
import { DividerModule } from 'primeng/divider'
import { InputTextModule } from 'primeng/inputtext'
import { MessageModule } from 'primeng/message'
import { TextareaModule } from 'primeng/textarea'


type DialogKind = 'chat' | 'terms' | 'privacy'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule, ButtonModule, CardModule, CheckboxModule,
    DialogModule, DividerModule, InputTextModule, MessageModule, TextareaModule, Envelope, Phone, MapMarker, Comments
  ],
      templateUrl: './contact.html',
      styleUrl: './contact.scss', 
  
})
export class Contact {
  private readonly fb = inject(FormBuilder)
  readonly submitted = signal(false)
  readonly dialogVisible = signal(false)
  readonly dialogKind = signal<DialogKind>('chat')
  readonly form = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.pattern(/\S/)]],
    lastName: ['', [Validators.required, Validators.pattern(/\S/)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required, Validators.pattern(/\S/)]],
    consent: [false, Validators.requiredTrue],
  })

  invalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field]
    return control.invalid && control.touched
  }

  submit(): void {
    this.form.markAllAsTouched()
    if (this.form.valid) this.submitted.set(true)
  }

  reset(): void {
    this.form.reset()
    this.submitted.set(false)
  }

  openDialog(kind: DialogKind): void {
    this.dialogKind.set(kind)
    this.dialogVisible.set(true)
  }

  get dialogTitle(): string {
    return { chat: 'Let’s talk', terms: 'Terms of Service', privacy: 'Privacy Policy' }[this.dialogKind()]
  }
}

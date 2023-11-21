import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-createtip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './createtip.component.html',
  styleUrl: './createtip.component.scss'
})

export class CreatetipComponent {
  title = ""
  location= ""
  description = ""
  photo = ""
  type = ""
}

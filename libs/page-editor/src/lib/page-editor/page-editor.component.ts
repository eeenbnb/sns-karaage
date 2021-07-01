import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'sns-karaage-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.scss']
})
export class PageEditorComponent implements OnInit {
  text = new FormControl('', [Validators.required]);
  par = new FormControl('', [Validators.required]);
  picture = new FormControl(null, [Validators.required]);

  postDateForm = new FormGroup({
    text: this.text,
    par: this.par,
    picture: this.picture
  })

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.postDateForm.patchValue({
        picture: file
      });
    }
  }

  onSubmit() {
    if (this.postDateForm.invalid) {
      return;
    }
    const file: File = this.picture.value;
    const filePath = 'upload_files/' + new Date().toISOString();
    const task = this.angularFireStorage.upload(filePath, file);
    task.then((_) => {
      this.angularFirestore.collection("items").add({
        test: this.text.value,
        par: this.par.value,
        imagesPath: filePath
      });
    });
  }
}

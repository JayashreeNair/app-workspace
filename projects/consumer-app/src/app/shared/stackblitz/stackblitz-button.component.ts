import {Component, Input, NgModule} from '@angular/core';
import {StackblitzWriter} from './stackblitz-writer';
import {MatButtonModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {ExampleData} from './example-data';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'stackblitz-button',
  templateUrl: './stackblitz-button.component.html',
  providers: [StackblitzWriter],
  // host: {
  //   '(mouseover)': 'isDisabled = !stackblitzForm'
  // }
})
export class StackblitzButtonComponent {
  /**
   * The button becomes disabled if the user hovers over the button before the stackblitz form
   * is created. After the form is created, the button becomes enabled again.
   * The form creation usually happens extremely quickly, but we handle the case of the
   * stackblitz not yet being ready for people will poor network connections or slow devices.
   */
  isDisabled = false;
  stackblitzForm: HTMLFormElement;
  exampleData: ExampleData

  @Input()
  set example(example: string) {
     this.exampleData = new ExampleData(example);

    if (example) {
      // this.stackblitzWriter.constructStackblitzForm(exampleData).then(stackblitzForm => {
      //   this.stackblitzForm = stackblitzForm;
      //   this.isDisabled = false;
      // });
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  constructor(private stackblitzWriter: StackblitzWriter) {}

  openStackblitz(): void {
    // When the form is submitted, it must be in the document body. The standard of forms is not
    // to submit if it is detached from the document. See the following chromium commit for
    // more details:
    // https://chromium.googlesource.com/chromium/src/+/962c2a22ddc474255c776aefc7abeba00edc7470%5E!
  //   document.body.appendChild(this.stackblitzForm);
  //   this.stackblitzForm.submit();
  //   document.body.removeChild(this.stackblitzForm);

    const project = {
      files: {
        'index.ts': this.exampleData.indexFilename,
        // 'index.html': html
      },
      title: 'Dynamically Generated Project',
      description: this.exampleData.description,
      template: 'angular-cli',
      tags: ['stackblitz', 'sdk'] ,
      dependencies: {
        'abz-components-library': '*' // * = latest version,
      }
    };

    sdk.openProject(project);
  }
}

@NgModule({
  imports: [MatTooltipModule, MatButtonModule, MatIconModule],
  exports: [StackblitzButtonComponent],
  declarations: [StackblitzButtonComponent],
  providers: [StackblitzWriter],
})
export class StackblitzButtonModule {}

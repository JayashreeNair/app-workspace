import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-button-page-example',
    templateUrl: './button-document-page-component.html',
    styleUrls: []
})
export class ButtonDocumentPageComponent implements OnInit {
    overview: any;

    constructor(private http: HttpClient) {
        http.get('/documentation/components/LibraryButtonComponent.html', {responseType: 'text'})
            .subscribe(
                (data: string) => {
                    this.overview = data;
                }
            );
    }

    ngOnInit(): void {
    }
}

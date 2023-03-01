import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    post = [];
    title: string = '';
    content: string = '';
    
    @Output() postCreated = new EventEmitter();
    addPost(){
        this.postCreated.emit();
    }
}
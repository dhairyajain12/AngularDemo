import { Component } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    newPost:string = "No content available";
    enteredValue:string = '';
    addPost() {
        // this.newPost = 'The user\'s post';
        //console.dir(postInput.value);
        this.newPost = this.enteredValue;
    }
}
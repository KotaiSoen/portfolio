import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  index = 0;

  images = [
    {
      img: "../../../assets/images/catwiki.png",
      liveLink: "https://kotai-catwiki.netlify.app",
      gitHub: "https://github.com/KotaiSoen/cat-wiki.git",
      description: 'Your ultimate catwiki. All you need to know about your favorite breeds is here'
    },
    {
      img: "../../../assets/images/chatapp.png",
      liveLink: "https://kotai-chatapp.netlify.app",
      gitHub: "https://github.com/KotaiSoen/chat-app.git",
      description: 'A discord-like app. Create groups and chat with your friends'
    },
    {
      img: "../../../assets/images/blog.png",
      liveLink: "https://zoeysuser.netlify.app",
      gitHub: "https://github.com/KotaiSoen/Zoey-s-Blog/tree/main/blogUser",
      description: 'A paid project. A fully functional blog'
    },
    {
      img: "../../../assets/images/auth.png",
      liveLink: "https://kotai-auth.netlify.app",
      gitHub: "https://github.com/KotaiSoen/auth-website.git",
      description: 'An authentication app. This makes up a small part of your dynamic website'
    },
    {
      img: "../../../assets/images/unsplash.png",
      liveLink: "https://kotai-unsplash.netlify.app",
      gitHub: "https://github.com/KotaiSoen/Unsplash.git",
      description: 'An unsplash app. All your favorite pictures meshed into one beautiful gallery'
    },
    {
      img: "../../../assets/images/imageuploader.png",
      liveLink: "https://kotai-image-uploader.netlify.app",
      gitHub: "https://github.com/KotaiSoen/image-uploader.git",
      description: 'This enables you upload an image to a server, get back the image with its url which you can make use of anywhere'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  decreaseIndex() {
    if (this.index > 0) {
      this.index -= 1;
    } else {
      this.index = this.images.length - 1;
    }
  }

  increaseIndex() {
    if (this.index < (this.images.length - 1)) {
      this.index += 1;
    } else {
      this.index = 0;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'grapejsDemo';


  ngOnInit():any{
    this.initializeEditor();
  }

  initializeEditor(){
    var editor = grapesjs.init({
      container : '#gjs',
  });


var blockManager = editor.BlockManager;

// 'my-first-block' is the ID of the block
blockManager.add('my-first-block', {
  label: 'Click Me',
  content: '<button class="my-block">Click Me</button>',
  style: {
    width: '350px'
  },
});

blockManager.add('ArtworkPresenter', {
  label: 'Artwork Presenter',
  content: `<div class="container">
  <div class="container-wrapper">
      <div class="left" style="width: 40%;
      float: left;
      text-align: center;">
          <img src="https://g99plus.b-cdn.net/desktop1%20leaf/Rectangle%206.png">
          <p style="text-align: center;">ArtWork Text</p>
      </div>

      <div class="right" style="width: 100%;">
          <div class="logo">
              <img src="https://g99plus.b-cdn.net/desktop1%20leaf/image%203%20(1).png">
              <h3>Artisit Name</h3>
          </div>

          <div class="content">
              <h3>Artowkr Name</h3>
              <p>3rd July 2021</p>
          </div>

          <div class="desc">
              <p>Thi is the artwork description andd I amn typing some dummy text for testing purpose</p>
          </div>

          <div class="button" >
              <button style="padding:1em 2em ; text-align:center">Exit</button>
          </div>
      </div>
  </div>
</div>
<style>
.container {
  width: 100%;
  height: 100%;
}

.left {
  width: 40%;
  float: left;
  text-align: center;
}

.right {
  width: 60%;
}
</style>
`,


});



  }

  


}

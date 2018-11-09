const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
      <label for="author" class="col-sm-2 control-label">Author's name</label>
      <div class="col-sm-10">
      <input name="author" type="text">
      </div>
    </div>

    
    <div>
      <label for="email" class="col-sm-2 control-label">Email Address</label>
      <div class="col-sm-10">
      <input name="email" type="email">
      </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>

    
    </div>
      <textarea name="content" rows="4" cols="50" placeholder="your article here"></textarea>
    <div>
    
    </div>
    
    <div>
      <select>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);
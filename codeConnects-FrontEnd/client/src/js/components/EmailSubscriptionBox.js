import React, { Component } from 'react';

class Email extends Component {
  render() {
    return (
<form>
  <label>
  Keep up to date with our latest news, events and calendar!
Subscribe to our Newsletter.
    <input type="text" name="name" value="Enter your email:"/>
  </label>
  <input type="submit" value="Subscribe" />
</form>	
    );
  }
}

export default Email;

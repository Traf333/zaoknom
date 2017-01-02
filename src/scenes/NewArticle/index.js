import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

export default function NewArticle(props) {
  return (
    <div>
      <h1>
        New Article

        <TextField
  hintText           ="Hint Text"
  floatingLabelText  ="Fixed Floating Label Text"
  floatingLabelFixed ={true}
/><br />
<TextField
  hintText="Message Field"
  floatingLabelText="MultiLine and FloatingLabel"
  multiLine={true}
  rows={2}
/><br />
<TextField
  hintText="Full width"
  fullWidth={true}
/>

    </div>
  );
}
NewArticle.propTypes = {
};

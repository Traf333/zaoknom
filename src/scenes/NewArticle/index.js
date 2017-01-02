import React from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

import './styles.css'

class NewArticle extends React.Component {

  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      published: false
    }
    this.submit = this.submit.bind(this)

  }

  submit(e) {
    e.preventDefault();
    
  }

  changeInput({name, value}) {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <h1 className="center">
          New Article
        </h1>
        <form action="createArticle" className="new-article" onSubmit={this.submit}>
          <TextField
            name="title"
            hintText="How to be the best"
            floatingLabelText="Title"
            onChange={e => this.changeInput(e.target)}
            fullWidth
          /><br />
          <TextField
            name="content"
            hintText="Message Field"
            floatingLabelText="Content"
            multiLine
            rows={5}
            onChange={e => this.changeInput(e.target)}

            fullWidth
          /><br />
          <Checkbox
            name="published"
            checkedIcon={<Visibility />}
            uncheckedIcon={<VisibilityOff />}
            onCheck={(_, checked) => this.changeInput({name: 'published', value: checked})}

            label="Custom icon of different shapes"
          /><br/>
          <div className="right">
            <Button type="submit" label="Submit" primary />
          </div>
        </form>
      </div>
    );
  }
}

export default NewArticle;
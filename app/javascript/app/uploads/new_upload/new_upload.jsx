import React, { Component } from 'react';

import Form from '../../../common/form';
import PaddedPage from '../../../common/padded_page';

import http from '../../../lib/http';

export default class NewUpload extends Component {
  state = {
    file: undefined,
    frames: {},
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleFrameChange = (event) => {
    const { name, checked } = event.currentTarget;
    this.setState(state => ({
      frames: {
        ...state.frames,
        [name]: checked,
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', this.state.file, this.state.file.name);
    this.selectedFrameIds.forEach(frameId => formData.append('frameIds[]', frameId));

    const response = await http.create(
      'upload',
      formData,
    )
  };

  get frames() {
    return [
      { id: 1, name: 'Mom', email: 'mom@gmail.com' },
      { id: 2, name: 'Grandpop', email: 'grandpop@gmail.com' },
    ];
  }

  get hasInputs() {
    return !!this.state.file && !!this.selectedFrameIds.length;
  }

  get selectedFrameIds() {
    return Object.keys(this.state.frames).filter(key => this.state.frames[key]);
  }

  render() {
    return (
      <PaddedPage heading="New Picture">
        <Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-upload-file">
              File
            </label>
            <input id="new-upload-file" type="file" onChange={this.handleFileChange} />
          </div>

          <div className="form-group">
            <label>
              Frame
            </label>
            {
              this.frames.map(frame => (
                <label key={frame.id}>
                  <input
                    checked={this.state.frames[frame.id] || false}
                    name={frame.id}
                    type="checkbox"
                    onChange={this.handleFrameChange}
                  />
                  {frame.name} ({frame.email})
                </label>
              ))
            }
          </div>

          <div className="form-actions">
            <button
              disabled={!this.hasInputs}
              type="submit"
            >
              Save
            </button>
          </div>
        </Form>
      </PaddedPage>
    );
  }
}

import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null,
    }
  }

  handleFileInput=(e)=>{
    this.setState({
      selectedFile : e.target.files[0],
    })
  }

  handlePost=async()=>{
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    console.log(formData);

    await axios.post("/api/upload", formData).then(res => {
      alert('성공')
    }).catch(err => {
      alert('실패')
    })
  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
        <button type="button" onClick={this.handlePost}>업로드</button>
      </div>
    )
  }
}

export default App
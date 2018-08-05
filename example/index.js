import React from 'react'
import ReactDOM from 'react-dom'

//import utils from '../dist/utils-pan'
import checkUpload from '../dist/check-upload'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {file: '上传检查结果展示'}
    this.handleChange = this.handleChange.bind(this)
    this.fileInput = React.createRef()
  }

  handleChange (event) {
    const file = this.fileInput.current.files[0]
    if (file) {
      this.setState({file: JSON.stringify(checkUpload(file, file.type, 10))})
    } else {
      this.setState({file: ''})
    }
  }

  render () {
    return (
      <div>
        <form>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
          </label>
        </form>
        <div>file: {this.state.file}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

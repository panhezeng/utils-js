import React from "react";
import ReactDOM from "react-dom";

// import utils from '../dist/utils-pan.js'
//import { checkUpload } from '../dist/utils-pan.js'

import checkUpload from "../dist/check-upload.js";
import textOverflow from "../dist/text-overflow.js";
import getObjectItemByPath from "../dist/get-object-item-by-path.js";
import moment from "../dist/moment.js";
import xss from "../dist/xss.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkUpload: "上传检查结果展示",
      textOverflow: "超过3个字省略",
      object: { path: "item" }
    };
    this.checkUploadHandle = this.checkUploadHandle.bind(this);
    this.textOverflowHandle = this.textOverflowHandle.bind(this);
    this.fileInput = React.createRef();
  }

  async checkUploadHandle(event) {
    const file = this.fileInput.current.files[0];
    if (file) {
      this.setState({
        checkUpload: JSON.stringify(
          await checkUpload(file, file.type, 1, 10, 10)
        )
      });
    } else {
      this.setState({ checkUpload: "" });
    }
  }

  textOverflowHandle(event) {
    this.setState({ textOverflow: textOverflow(this.state.textOverflow, 3) });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Upload file:
            <input
              type="file"
              ref={this.fileInput}
              onChange={this.checkUploadHandle}
            />
          </label>
        </form>
        <div>checkUpload: {this.state.checkUpload}</div>
        <button onClick={this.textOverflowHandle}>超过3个字加省略符号</button>
        <div>textOverflow: {this.state.textOverflow}</div>
        <div>
          getObjectItemByPath: {getObjectItemByPath(this.state, "object.path")}
        </div>
        <div>moment {moment().format("YYYY-MM-DD HH:mm:ss")}</div>
        <div>moment durationFormatHMS {moment.durationFormatHMS(3601)}</div>
        <div>
          xss{" "}
          {xss.cleanHtml(
            "<strong>hello</strong><script>alert(/xss/);</script>end"
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

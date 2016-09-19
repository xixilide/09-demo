import React, { PropTypes } from  'react';
import { getMd } from  './utils/helper';
import Hljs from 'highlight.js';
import marked from  'marked';
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let add=this.props.params.title;

    getMd(add)
      .then( (recData) => {

        this.setState({
          data:recData.getMd,
          wait:false
        })
      });
  }
  render () {
      marked.setOptions({
            highlight: function (code) {
              return Hljs.highlightAuto(code).value;
            }
          });
    let content= this.state.wait ? "请稍等" : marked(this.state.data);
    return(


      <div>
              <div dangerouslySetInnerHTML={{__html:content}} className="post-content"/>
      </div>
    )
  }
}

export default Blog;

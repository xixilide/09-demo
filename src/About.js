import React, { PropTypes } from 'react';
import { searchGit } from './utils/helper'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
// console.log( searchGit );
searchGit()
    .then((data) => {

      console.log(data);
    })
  }
  render () {
    return(
      <div>
        {
          this.state.wait ? '正在获取数据' :
          <img src={this.state.data.avatar_url} />
        }
      </div>
    )
  }
}

export default About;

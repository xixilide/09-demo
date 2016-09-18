import React, { PropTypes } from 'react';
// import { searchGit } from './utils/helper'


class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }

  handleInput(e){
    let value=e.target.value;
    this.setState({inputValue:value})
  }
  handleClick(){
    let name=this.state.inputValue;
    console.log(name);
    searchGit(name)
    .then((recData) => {
      this.setState(
        data:recData.data,
        wait:false
      )
    })
    console.log(this.state.data);
  }
  render () {
    let styles={

    }
   let  gitInfo=(
     <div>
      <h3>{this.state.data.name}</h3>
      <img src={ this.state.data.avatar_url } />
     </div>
   )
    return(
      <div>

      <input type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
      <button onClick={this.state.handleClick}>搜索</button><br />

        {
          this.state.wait ? '正在获取数据' :
          gitInfo
        }
      </div>
    )
  }
}

export default About;

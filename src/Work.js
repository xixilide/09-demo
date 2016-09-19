import React, { PropTypes } from 'react';
import Card from './components/Card';
import { getJson } from './utils/helper';



class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (recData) => {

        this.setState({
          data:recData.getJson,
          wait:false
        })
      });
  }
  render () {
    let Cards=this.state.data.map( (item,i) => <Card {...item} key={i} /> );
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {this.state.wait ? "请稍等" : Cards }
        </div>
      </div>
    )
  }
}

export default Work;

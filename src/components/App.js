import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement} from '../actions';

class EventsIndex extends Component {
  render(){
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </React.Fragment>
    )
  }
}
/*
:stateの情報からコンポーネントに必要なものを取り出して、
コンポーネント内のpropsとしてマッピングする
@param state 状態のトップレベル 
@return {Object} どういったオブジェクトをpropsとして対応させるか
*/
const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = ({increment, decrement});


/*
connect関数
:stateとactionをcomponentに関連づける
*/
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


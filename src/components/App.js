import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement} from '../actions';

class App extends Component {
  render(){
    const props = this.props;
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>
        +
        </button>
        <button onClick={props.decrement}>
        -
        </button>
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

/*
:あるアクションが発生した時に、reducerに、typeに応じた状態遷移を発生させる関数

@param
@return {Object}
 */ 
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

/* mapDispatchToProps関数のショートハンド
 const mapdispatchToProps = ({increment, decrement});
*/

/*
connect関数
:stateとactionをcomponentに関連づける
*/
export default connect(mapStateToProps, mapDispatchToProps)(App)


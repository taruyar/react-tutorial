import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount(){
    //外部のAPIサーバに対してHTTPリクエストを送信し、情報を取得する
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}
/*
:stateの情報からコンポーネントに必要なものを取り出して、
コンポーネント内のpropsとしてマッピングする
@param state 状態のトップレベル 
@return {Object} どういったオブジェクトをpropsとして対応させるか
*/
const mapStateToProps = state => ({events: state.events})

const mapDispatchToProps = ({readEvents})


/*
connect関数
:stateとactionをcomponentに関連づける
*/
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


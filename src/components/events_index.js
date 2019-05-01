import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount(){
    console.log('Components: componentDidMount')
    //外部のAPIサーバに対してHTTPリクエストを送信し、情報を取得する
    this.props.readEvents()
  }

  renderEvents(){
    console.log('Components: renderEvents')
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    console.log('Components: render HTML')
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>          
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
          </table>
        <Link to ='/events/new'>New Event</Link>
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
const mapStateToProps = state => ({events: state.events})

const mapDispatchToProps = ({readEvents})


/*
connect関数
:stateとactionをcomponentに関連づける
*/
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


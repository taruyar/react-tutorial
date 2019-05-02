import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    if(id) this.props.getEvent(id)
  }

  renderField(field){
    console.log('Components: EventsShow: renderField')
    const {input, label, type, meta: {touched, error}} = field
    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick(){
    console.log('Components: EventsShow: onDeleteClick')
    const { id } = this.props.match.params
    console.log(`id: ${id}`)
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  render(){
    console.log('Components: EventsShow: render HTML')
    const {handleSubmit, pristine, submitting, invalid} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label='Title' name='title' type='text' component={this.renderField}/></div>
        <div><Field label='Body' name='body' type='text' component={this.renderField}/></div>
        <div>
          <input type='submit' value='submit' disabled={pristine || submitting || invalid} />
          <Link to='/'>Cancel</Link>
          <Link to='/' onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  console.log('Components: EventsShow: validate')
  const errors = {}
  if(!values.title) errors.title = 'Enter a title, please.'
  if(!values.body) errors.body = 'Enter a body, please.'

  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return {initialValues: event, state}
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent})


/*
connect関数
:stateとactionをcomponentに関連づける
*/
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)
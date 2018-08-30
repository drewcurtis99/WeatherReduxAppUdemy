import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); //Default functionality of a form is to refresh the page and try to send data to an external server when "enter" is pressed or the submit button is clicked. This code nullifies that functionality.
    this.props.fetchWeather(this.state.term);  //this.props.fetchWeather is an availiable property because of the functions mapDispatchToProps & connect.
    this.setState({ term: '' });  //This resets the input after a form submit.
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) { //This function hooks up our action creator (fetchWeather) to our SearchBar.
  return bindActionCreators({ fetchWeather }, dispatch);  //This ensures our action is added to dispatch which flows to the middleware and reducers.
}

export default connect(null, mapDispatchToProps)(SearchBar); //The null is because the dispatchToProps has to be the second argument. Also because no component state is needed.

// Notes
// Controlled Field = A form element where input value is set by component state. This requires the input to have two attributes: value={this.state.(something(in this case it is term))} & onChange(or some other event handler). The onChange event can be written in two ways I know of. One is displayed in the code above where you simply call the onInputChange function. But because you have this.onInputChange refer to the function that also has this.setState(something something), you're 'this' will no longer be referring to the SearchBar object. You need to reset it by running the bind function as shown in the constructor function above. The second way to accomplish this is by writing the following code: onChange={(e) => this.onInputChange(e)}

// change handeler(event handeler)
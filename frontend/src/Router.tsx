import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchAPI } from './Api';
import DatePicker from 'react-datepicker'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface IState {
  roles: Map<string, boolean>
  date: Date
}

interface IProps {
}

class CreateGame extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {roles: new Map<string, boolean>(), date: new Date()}
  }

  async fetchRoles() {
    const roles = new Map<string, boolean>()
    await fetchAPI('/game/roles')
            .then(ls => ls.forEach((el: string) => {
              roles.set(el, false)
            }))
    this.setState({
      roles: roles
    })
  }

  componentDidMount() {
    this.fetchRoles()
  }

  submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(this.state)
  }

  onChangeListen(type: string, value: string) {
    const roles = this.state.roles
    var date = this.state.date

    switch (type) {
      case "role":
        roles.set(value, this.state.roles.get(value) ? false : true)
        break;
      case "date":
        date = value
      default:
        break;
    }
    this.setState({roles: roles, date: date})
  }

  render() {
    return (
      <form>
          <h1>Create game</h1>
          <DatePicker startDate={this.state.date} onChange={date => console.log(date)}/>
          <ul>
              { [...this.state.roles.keys()].map((value) => (
                  <Checkbox key={value} label={value} isSelected={this.state.roles.get(value)} onChangeListener={this.onChangeListen.bind(this)} />
              ))}
          </ul>
          <button type="submit" onClick={this.submit.bind(this)}>Submit!</button>
      </form>
      )
  }
}

const Checkbox = ({ label, isSelected, onChangeListener } : any) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        onChange={() => onChangeListener("role", label)}
        defaultChecked={isSelected}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

function MyGames() {
    return <h1>My games</h1>
}

function FrontendRouter() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to='/creategame'>Create game!</Link>
            <Link to='/mygames'>My games</Link>
        </header>
        <Switch>
          <Route path="/creategame"><CreateGame /></Route>
          <Route path="/mygames"><MyGames /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default FrontendRouter;
import * as React from 'react';
import { fetchAPI, postAPI } from './Api';
import DatePicker from 'react-datepicker'

interface IState {
    roles: Map<string, boolean>
    date: Date
}

interface IProps {
}

export class CreateGame extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {roles: new Map<string, boolean>(), date: new Date()}
    }

    async fetchRoles() {
        const roles = new Map<string, boolean>()
        await fetchAPI('/game/roles')
            .then(ls => ls.forEach((el: string) => { roles.set(el, false)}))
        this.setState({ roles: roles })
    }

    async pushGame() {
        const state = this.state
        await postAPI('/game/create', state)
            .then(data => { console.log(data)})
    }

    componentDidMount() {
        this.fetchRoles()
    }

    submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        this.pushGame()
    }

    onChangeListen(type: string, value: any) {
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
            <DatePicker inline selected={this.state.date} onChange={date => this.onChangeListen("date", date)}  placeholderText="MM/DD/YYYY"/>
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
import './App.css';
import { Component } from 'react';
import UserList from './UserList';
//import { Map } from 'immutable';
import { List } from 'immutable';
import { Record } from 'immutable';

const User = Record({
  id: null,
  username: null
});

const Data = Record({
  input: '',
  users: List()
})

class App extends Component {
  id = 3;
  state = {
    data: Data({
      input: '',
      users: List([
        User({
          id: 1,
          username: 'Lee seung-ho'
        }),
        User({
          id: 2,
          username: 'Kim kyuri'
        })
      ])
    })
  };

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set('input', value)
    });
  }

  onButtonClick = (e) => {
    const { data } = this.state;
    this.setState({
      data: data.set('input', '').update('users', users => users.push(User({
        id: this.id++,
        username: data.input
      })))
    });

    /*
    const { users, input } = this.state;
    this.setState({
      input: '',
      users: users.concat({
        id: this.id++,
        username: input
      })
    });*/

    /*
    this.setState(
      ({ users, input }) => ({
        input: '',
        users: users.concat({
          id: this.id++,
          username: input
        })
      })
    );*/
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { data: { input, users } } = this.state;

    return (
      <div>
        App
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>

        <h1>사용자 목록</h1>

        <div>
          <UserList users={users} />
        </div>

      </div>
    );
  }
}

export default App;

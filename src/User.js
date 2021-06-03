const { Component } = require("react");

class User extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.users !== this.props.users;
    }

    render() {
        //const { username } = this.props.user.toJS();
        const { username } = this.props.user;

        console.log('%s가 렌더링 되고 있어요!', username);
        return (
            <div>
                {username}
            </div>
        );
    }
}

export default User;
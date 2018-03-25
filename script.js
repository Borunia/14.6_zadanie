var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function () {
        console.log('getDefaultProps - for initialization props')
    },
    componentWillMount: function () {
        console.log('componentWillMount; counter: '+this.state.counter+3)
    },
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps')
    },
    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate')
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate')
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate ')
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount')
    },
    
    render: function() {
        return React.createElement('div', {},
            	 React.createElement('span', {}, 'Licznik ' + this.state.counter),
            	 React.createElement('button', {onClick: this.increment}, 'Increment'),
            	 React.createElement('button', {onClick: this.decrement}, 'Decrement'),
        );
    }
});

var element = React.createElement('div', {className: 'counters'},
		React.createElement('h1', {}, 'Counters'),
		React.createElement(Counter),
		React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));

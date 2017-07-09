function FormattedDate(props) {
    return <h2>It is again... {props.date.toLocaleTimeString()}.</h2>;
}

/**
 * Components
 */
export default class Tick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: []
        };

        // This binding is necessary to make `this` work in the callback
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
    }

    /**
     *  Lifecycle Methods
     * Une fois que le composant est monté
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }

    /**
     *  Lifecycle Methods
     * Une fois que le composant est démonté
     */
    componentWillUnmount() {
        clearInterval(this.timerID); // arrete l'intervale de temps
    }

    /**
     * On modifie le state
     */
    tick() {
        this.setState({ // Ne pas modifier le state directe d'un composant mais passer par setState() 
            date: new Date()
        });
    }

    formatName() {
        return "Hello Man";
    }

    stop() {
        clearInterval(this.timerID); // arrete l'intervale de temps
    }


    start() {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }

    render() {
        return <div>
            <h1>Ticked, {this.props.name}  {this.props.caractere}</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

            Compteur:
            <FormattedDate date={this.state.date} />

            <button className="waves-effect waves-light btn red" onClick={this.stop}>
                Stop now !
            </button>
            <button className="waves-effect waves-light btn" onClick={this.start}>
                Start/Resume
            </button>
        </div>;

    }
}
import React, {Component} from 'react';
import '../style/MySelect.css'
export default class MySelect extends Component {

    constructor(props){
        super(props)
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let {items} = this.props;
        return (
            <div>
                <div className="select-container" onClick={this.handleToggle}>
                    全部
                    <span className="select-arrow">{ this.state.open?'\u25B2':'\u25BC'}</span>
                </div>
                <div>
                    <div className="select-content" style={{display:this.state.open?'':'none'}}>
                        {
                            items.map( item => (
                                <div className="select-option">
                                    {item}
                                </div>)
                            )
                        }
                    </div>
                </div>
            </div>

        );
    }
}
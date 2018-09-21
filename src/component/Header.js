import React, {Component} from 'react';
import '../style/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-logo">
                    <img src="https://www.baidu.com/favicon.ico"/>
                    <span>title</span>
                </div>
                <div className="header-search">
                    <select>
                    </select>
                    <input type="text"/>
                    <button>search</button>
                </div>
                <div className="header-user">
                    <div>logout</div>
                </div>
            </div>
        );
    }
}
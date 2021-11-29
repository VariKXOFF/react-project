import React from 'react';

export default class Clothes extends React.Component {
    render() {
        return <div className={"clothes-box"}>
            <img src={this.props.src} className={"clothes-box__image"}/>
            <h4 className={"clothes-box__title"}>{this.props.title}</h4>
            <p className={"clothes-box__price"}>{this.props.price}р.</p>
            <div style={{display: "none"}} className={"clothes-box__full"}>
                <img src={this.props.src} className={"clothes-box__image-full"}/>
                <div className={"clothes-box__info-block"}>
                    <button className={"close"}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"/>
                    </svg></button>
                    <h4 className={"clothes-box__title"}>{this.props.title}</h4>
                    <p className={"clothes-box__info"}>{this.props.info}</p>
                    <p className={"clothes-box__price"}>{this.props.price}р.</p>
                    <ul className={"size-box"}>
                        <li className={"size-box__element"}>XS</li>
                        <li className={"size-box__element"}>S</li>
                        <li className={"size-box__element"}>M</li>
                        <li className={"size-box__element"}>L</li>
                        <li className={"size-box__element"}>XL</li>
                        <li className={"size-box__element"}>XXL</li>
                    </ul>
                    <button className={"add-basket"}>В корзину</button>
                </div>
            </div>
        </div>
    }
}
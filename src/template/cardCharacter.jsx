import React, { Component } from 'react'

export default class CardCharacter extends Component {
    mapOccupation() {
        const list = this.props.occupation || []
        return list.join()
    }

    render() {
        return (
            <div className="card__character">
                <div className="card__character__overlay"></div>
                <div className="card__character__status">{this.props.status}</div>
                <img className="card__character__image" src={this.props.img} alt={this.props.nickname} />
                <div className="card__character__box">
                    <h2 className="card__character__box__title">{this.props.name}</h2>
                    <p className="card__character__box__birthday">{this.props.birthday}</p>
                    <p className="card__character__box__occupation">{this.mapOccupation()}</p>
                </div>
            </div>
        )
    }

}


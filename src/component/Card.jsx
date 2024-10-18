import React from "react";
function Card(props) {
    return (
        <div className="card">
            <h2 className="h2">{props.name}</h2>
            <div className="sub-title">Вселенная: {props.universe}</div>
            <div className="sub-title">Альтер-эго: {props.alterego}</div>
            <div className="sub-title">Род деятельности: {props.occupation}</div>
            <div className="sub-title">Друзья: {props.friends}</div>
            <div className="sub-title">Суперсила: {props.superpowers}</div>
            <div className="img-container">
            <img src={props.url} alt={props.photo} className="img"/>
            </div>
            <p>{props.info}</p>
        </div>
    );
}

// function Card(props) {
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <img src={props.imgLink} alt={props.title}/>
//                 <h4 className="card-title">{props.title}</h4>
//                 <p className="card-text">{props.description}</p>
//             </div>
//             <div className="card-footer">
//                 <span className="card-price">${props.price}</span>
//                 <button className="card-add">Заказать</button>
//             </div>
//         </div>
//     );
// }

export default Card;
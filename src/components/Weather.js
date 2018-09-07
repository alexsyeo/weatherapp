import React from "react";

const Weather = props => (
    <div className="weather--info">
        { 
            props.city && props.country && <p className="weather__key">Location: 
                <span className="weather__value"> { props.city }, { props.country }</span>
            </p>
        }
        { 
            props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> { props.temperature } &deg;C , { props.temperature * 1.8 + 32 } &deg;F</span>
                
            </p> 
        }
        { 
            props.humidity && <p className="weather__key">Humidty:
                <span className="weather__value"> { props.humidity } &#37;</span>
            </p> 
        }
        { 
            props.description && <p className="weather__key">Conditions:
                <span className="weather__value"> { props.description }</span>
            </p>
        }
        { 
            props.error && <p className="weather__error">{ props.error }</p> 
        }
    </div>
);

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 { props.city && props.country && <p>Location: { props.city }, { props.country }</p>}
//                 { props.temperature && <p>Temperature: { props.temperature }</p> }
//                 { props.humidity && <p>Humidty: { props.humidity }</p> }
//                 { props.description && <p>Conditions: { props.description }</p> }
//                 { props.error && <p>{ props.error }</p> }
//             </div>
//         );
//     }
// }

export default Weather;
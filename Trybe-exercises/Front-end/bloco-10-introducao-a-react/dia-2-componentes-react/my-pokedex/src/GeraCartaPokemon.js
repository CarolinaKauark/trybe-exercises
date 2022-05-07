import React from 'react';
import PropTypes from 'prop-types';



class GeraCartaPokemon extends React.Component {
    render() {
        let {name, type, averageWeight, image } = this.props.objPokemon;
        return (
            <div className = "pokemon">
                <h2>{name}</h2>
                <p>{type}</p>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                <img src={image} alt={name}/>
            </div>
        );
    }

}

GeraCartaPokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.object
}

export default GeraCartaPokemon;
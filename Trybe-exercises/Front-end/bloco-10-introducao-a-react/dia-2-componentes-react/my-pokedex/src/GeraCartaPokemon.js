import React from 'react';



class GeraCartaPokemon extends React.Component {
    render() {
        let {name, type, averageWeight, image } = this.props.objPokemon;
        return (
            <div className = "pokemon">
                <h1>{name}</h1>
                <p>{type}</p>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                <img src={image} alt={name}/>
            </div>
        );
    }

}

export default GeraCartaPokemon;
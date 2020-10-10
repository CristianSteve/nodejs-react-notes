import React, { Fragment } from 'react'

const Boton = (props) => {
    return (
        <Fragment>
            <button className={props.classAdd}>
                {props.value}
            </button>
        </Fragment>
    );
}

export default Boton;
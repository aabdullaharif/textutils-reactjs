import React from 'react'

export default function Alert(props) {
    const capatilize = (e)=>{
        return e.charAt(0).toUpperCase() + e.slice(1);
    }

  return (
        props.alert && <div className={`alert fixed-style alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.type)}</strong>: {props.alert.message}
        </div>
  )
}

import React from 'react'

const InputField = ({
    type="text",
    label=false,
    id=false,
    ...rest
}) => {
    console.log(`Rendenring ${label}`);
    return (
        <>
            {label && <p><label htmlFor={id}>{label}</label></p>}
            <input
                id={id}
                type={type}
                {...rest}
            >
            </input>
        </>
    )
}

export default React.memo(InputField)

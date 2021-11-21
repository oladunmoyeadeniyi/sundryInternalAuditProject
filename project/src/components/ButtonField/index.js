import React from 'react'

const ButtonField = ({
    type="button",
    children,
    btn_text=false,
    ...rest
}) => {
    console.log("Buttonfield");
    return (
        <div>
            <button
                type={type}
                {...rest}
            >
                {!btn_text? children : btn_text}
            </button>
        </div>
    )
}

export default React.memo(ButtonField)

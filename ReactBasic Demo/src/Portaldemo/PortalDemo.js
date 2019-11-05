import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            portal Demo
        </div>,
        document.getElementById("portal-root")
    )
}

export default PortalDemo

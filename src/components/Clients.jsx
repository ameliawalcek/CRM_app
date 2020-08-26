import React from 'react';
import { observer, inject } from 'mobx-react'

const Clients = inject("")(observer((props) => {

    return (
        <div>
            Clients
        </div>
    )
}))

export default Clients;
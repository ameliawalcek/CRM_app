import React from 'react';
import { observer, inject } from 'mobx-react'
import Client from './Client';

const Clients = inject("crmStore")(observer((props) => {

    return (
        <table>
            <tbody>
                {props.crmStore.clients.map(client => {
                    return <Client client={client} key={Math.random()} />
                })}
            </tbody>
        </table>
    )
}))

export default Clients;
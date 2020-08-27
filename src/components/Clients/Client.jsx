import React from 'react';
import { observer, inject } from 'mobx-react'

const Client = inject("crmStore")(observer((props) => {

    return (
        <tr>
            <td>{props.client.last}</td>
            <td>{props.client.first}</td>
            <td>{props.client.country}</td>
            <td>{props.client.date}</td>
            <td>{props.client.email}</td>
            <td>{props.client.sold ? '✓' : '-'}</td>
            <td>{props.client.owner}</td>
            <td>{props.client.email_type}</td>
        </tr>
    )
}))

export default Client;
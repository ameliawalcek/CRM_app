import React from 'react';
import { observer, inject } from 'mobx-react'
import Selects from './Selects'
import Inputs from './Inputs'
import { Link } from 'react-router-dom'

const Actions = inject("crmStore", "inputStore")(observer((props) => {

    let { last, first, owner_id, date, country_id, email_type_id,
        email, sold, handleCheckBox } = props.inputStore

    const addClient = () => {
        email_type_id = parseInt(email_type_id)
        owner_id = parseInt(owner_id)
        country_id = parseInt(country_id)
        let newClient =
        {
            id: null, last, first, email, sold, date,
            email_type_id, owner_id, country_id
        }

        props.crmStore.addClient(newClient)
    }

    return (
        <div>
            <Inputs name={'first'} type={'text'} placeholder={'First Name'}/>
            <Inputs name={'last'} type={'text'} placeholder={'Last Name'}/>
            <Inputs name={'email'} type={'text'} placeholder={'Email'}/>
            <Inputs name={'date'} type={'date'} placeholder={'Date'}/>

            <input type="checkbox" onChange={handleCheckBox} />
            <label>Sold Product</label>

            <Selects selectValue={country_id} name='country_id' data={props.crmStore.countries} placeholder={'Country'} />
            <Selects selectValue={owner_id} name='owner_id' data={props.crmStore.owners} placeholder={'Employee'} />
            <Selects selectValue={email_type_id} name='email_type_id' data={props.crmStore.emailTypes} placeholder={'Email Type'} />

            <Link to='/clients'><button onClick={addClient}>Add Client</button></Link>
        </div>
    )
}))

export default Actions;
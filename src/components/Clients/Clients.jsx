import React, { useEffect } from 'react';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'
import { observer, inject } from 'mobx-react'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
// import Alert from '@material-ui/lab/Alert';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
}

const Clients = inject("crmStore", "inputStore")(observer((props) => {
    let { renderTableSelect } = props.inputStore
    let { countries, owners, emailTypes, clients } = props.crmStore

    let country = renderTableSelect(countries)
    let owner = renderTableSelect(owners)
    let emailType = renderTableSelect(emailTypes)

    useEffect(() => {
        props.crmStore.getClients()
    }, [clients])

    let columns = [
        { title: "id", field: "id", hidden: true },
        { title: "First", field: "first" },
        { title: "Last", field: "last" },
        { title: "Country", field: "country_id", lookup: country },
        { title: "Email", field: "email" },
        { title: "Sold", field: "sold" },
        { title: "Employee", field: "owner_id", lookup: owner },
        { title: "Date", field: "date" },
        { title: "Email Type", field: "email_type_id", lookup: emailType },
    ]


    //   const handleRowUpdate = (newData, oldData, resolve) => {
    //     //validation
    //     let errorList = []
    //     if(newData.first_name === ""){
    //       errorList.push("Please enter first name")
    //     }
    //     if(newData.last_name === ""){
    //       errorList.push("Please enter last name")
    //     }
    //     if(newData.email === "" || validateEmail(newData.email) === false){
    //       errorList.push("Please enter a valid email")
    //     }

    //     if(errorList.length < 1){
    //       api.patch("/users/"+newData.id, newData)
    //       .then(res => {
    //         const dataUpdate = [...data];
    //         const index = oldData.tableData.id;
    //         dataUpdate[index] = newData;
    //         setData([...dataUpdate]);
    //         resolve()
    //         setIserror(false)
    //         setErrorMessages([])
    //       })
    //       .catch(error => {
    //         setErrorMessages(["Update failed! Server error"])
    //         setIserror(true)
    //         resolve()

    //       })
    //     }else{
    //       setErrorMessages(errorList)
    //       setIserror(true)
    //       resolve()

    //     }

    //   }

    return (
        <div className="client-table">
            <Grid>
                <MaterialTable
                    title=""
                    columns={columns}
                    data={clients}

                    icons={tableIcons}
                    editable={{
                        onRowUpdate: (newData, oldData) => {

                        },
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                props.crmStore.deleteClient(oldData, resolve)
                            }),
                    }}
                />

            </Grid>
        </div>
    );
}))

export default Clients;
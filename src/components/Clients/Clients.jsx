import React from 'react';
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

// function validateEmail(email) {
//     const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
//     return re.test(String(email).toLowerCase());
// }

const Clients = inject("crmStore", "inputStore")(observer((props) => {
    let {renderTableSelect} = props.inputStore

    let columns = [
        { title: "id", field: "id", hidden: true },
        { title: "First name", field: "first" },
        { title: "Last name", field: "last" },
        { title: "Country", field: "country", lookup: renderTableSelect(props.crmStore.countries)},
        { title: "Email", field: "email" },
        { title: "Sold", field: "sold" },
        { title: "Employee", field: "owner" , lookup: renderTableSelect(props.crmStore.owners) },
        { title: "Date", field: "date" },
        { title: "Email Type", field: "email_type" , lookup: renderTableSelect(props.crmStore.emailTypes)},
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
                    {/* <div>
                        {iserror &&
                            <Alert severity="error">
                                {errorMessages.map((msg, i) => {
                                    return <div key={i}>{msg}</div>
                                })}
                            </Alert>
                        }
                    </div> */}
                    <MaterialTable
                        title="User data from remote source"
                        columns={columns}
                        data={props.crmStore.clients}
                        options={{

                        }}
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
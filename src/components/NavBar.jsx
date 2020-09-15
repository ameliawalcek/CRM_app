import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom'
import { Paper, Tabs, Tab } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        color: 'white',
        backgroundColor: '#6600ed',
    },
});

export default function IconLabelTabs() {
    const classes = useStyles();
    const paths = { '/clients': 0, '/analytics': 1, '/actions': 2 }
    const location = useLocation()
    const [value, setValue] = React.useState(paths[location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square style={{ zIndex: 10, position: "fixed", top: "0", width: "100%" }} className={classes.root}>
            <Tabs
                TabIndicatorProps={{
                    style: {
                        height: "5px",
                        backgroundColor: 'white'
                    }
                }}
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="icon label tabs example"
                centered
            >
                <Tab icon={<PeopleAltIcon />} label="CLIENTS" to='/clients' component={Link} />
                <Tab icon={<EqualizerIcon />} label="DASHBOARD" to='/analytics' component={Link} />
                <Tab icon={<AddIcon />} label="ADD CLIENT" to='/actions' component={Link} />
            </Tabs>
        </Paper>
    );
}
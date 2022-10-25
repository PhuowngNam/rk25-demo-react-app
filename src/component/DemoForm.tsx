import React, {Component} from 'react';
import {Alert, Box, MenuItem, Select, TextField, Theme} from "@mui/material";

interface IDemoFormState {
    username: string,
    age: number | null
}

class DemoForm extends Component<any, IDemoFormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            age: null,
        }
    }

    private changeUsername(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    private changeAge(e: any) {
        this.setState({
            ...this.state,
            age: e.target.value
        })
    }

    render() {
        return (
            <Box display={'flex'}
                 flexDirection={'column'}
            >
                <Box m={1} width={'100%'}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={this.state.username}
                        onChange={e => this.changeUsername(e)}
                    />
                </Box>
                <Box m={1} className={'selectInput'}>
                    <Select
                        autoWidth={false}
                        value={this.state.age}
                        label="Age"
                        onChange={e => this.changeAge(e)}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Box>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
            </Box>
        );
    }
}

export default DemoForm;
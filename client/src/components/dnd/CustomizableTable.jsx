import * as React from "react";
import { Table } from "antd";
import { DragDropContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import DraggableBodyRow from "./DraggableBodyRow";

const columns = [
    {
        title: "Full Name",
        dataIndex: "name",
    },
    {
        title: "Gender",
        dataIndex: "gender",
        sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone"
    },
    {
        title: "Country",
        dataIndex: "country",
        key: "country",
    },
    {
        title: "Device",
        dataIndex: "device",
        key: "device"
    },
    {
        title: "Log Time",
        dataIndex: "logTime",
        key: "logTime",
    }
]

    const onChange = (pagination, sorter) => {
    console.log('params', pagination, sorter);
  };


class CustomizableTable extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch('http://localhost:5000/api/users/top-users')
            .then((response) => response.json())
            .then(res => {
                this.setState({ data: res?.result });
            });
    };

    components = {
        body: {
            row: DraggableBodyRow
        }
    };

    onRow = (record, index) => ({
        index,
        moveRow: this.moveRow
    });

    moveRow = (dragIndex: number, hoverIndex: number) => {
        this.setState(prevState => {
            const { data } = update(prevState, {
                data: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, prevState.data[dragIndex]]]
                }
            });

            return { data };
        });
    };



    render() {
        return (
            <Table
                {...this.props}
                bordered
                columns={columns}
                dataSource={this.state.data}
                components={this.components}
                onRow={this.onRow}
                onChange={onChange}
            />
        );
    }
}

export default DragDropContext(HTML5Backend)(CustomizableTable);
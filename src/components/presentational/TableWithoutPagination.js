/**
 * Created by Ysssssss on 19/4/22.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Table } from 'rsuite';

import { getParentNode } from "../../utils/getParentNode";

class TableWithPagination extends PureComponent {
    static propTypes = {
        tableDataList: PropTypes.array,
        loading: PropTypes.bool,
        tableContainer: PropTypes.node,
        getTableList: PropTypes.func,
    }

    static defaultProps = {
        loading: false,
    }

    constructor (props) {
        super(props)
        this.state = {
            maxTableHeight: 400,
        }
    }

    componentDidMount() {
        this.getTableData()
        const maxTableHeight = this.calcHeight() || 400
        this.setState({
            maxTableHeight
        })
    }

    calcHeight = () => {
        const { tableLocation } = this.refs
        if (tableLocation) {
            const tableContainer = getParentNode(tableLocation, 'table-container')
            return tableContainer.offsetHeight - tableLocation.offsetTop - 80
        }
        return 400
    }

    getTableData = () => {
        this.props.getTableList && this.props.getTableList()
    }

    render () {
        const { maxTableHeight } = this.state
        const { children } = this.props
        const tableHeight = 80 + 46 * data.length + 10
        return (
            <React.Fragment>
                <div ref="tableLocation"
                     className={`customize-table${data.length === 0 ? ' empty' : '' }`}
                >
                    <Table
                        virtualized
                        cellBordered
                        height={page === 1 && data.length === 0 ? maxTableHeight : Math.min(tableHeight, maxTableHeight)}
                        headerHeight={80}
                        rowHeight={46}
                        data={data}
                        className="customize-table"
                    >
                        { children }
                    </Table>
                </div>
            </React.Fragment>
        )
    }
}

export default TableWithPagination
/**
 * Created by Ysssssss on 19/4/22.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Table, Breadcrumb } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

import { tablePaginationProps } from "../../constants/TableProps";
import { getParentNode } from "../../utils/getParentNode";

class TableWithPagination extends PureComponent {
    static propTypes = {
        initPage: PropTypes.number,
        initDisplayLength: PropTypes.number,
        tableDataMap: PropTypes.object,
        tableDataList: PropTypes.array,
        loading: PropTypes.bool,
        tableContainer: PropTypes.node,
        getNextPage: PropTypes.func,
    }

    static defaultProps = {
        loading: false,
        initPage: 1,
        initDisplayLength: tablePaginationProps.lengthMenu[1].value
    }

    constructor (props) {
        super(props)
        this.state = {
            maxTableHeight: 400,
            page: props.initPage,
            displayLength: props.initDisplayLength
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

    revertToSearch = () => {
        this.setState({
            page: 1
        }, () => {
            this.getTableData()
        })
    }

    getTableData = () => {
        const { page, displayLength } = this.state
        this.props.getNextPage && this.props.getNextPage({
            page, displayLength
        })
    }

    handleChangePage = (dataKey) => {
        const { tableDataMap } = this.props
        this.setState({
            page: dataKey
        }, () => {
            tableDataMap && this.getTableData()
        });
    }

    handleChangeLength = (dataKey) => {
        const { tableDataMap } = this.props
        this.setState({
            page: 1,
            displayLength: dataKey
        }, () => {
            tableDataMap && this.getTableData()
        });
    }

    reformedTableInfo() {
        const { displayLength, page } = this.state;
        const { tableDataMap, tableDataList } = this.props
        if (tableDataMap) {
            return {
                data: tableDataMap.list,
                total: tableDataMap.total
            }
        } else if (tableDataList) {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return {
                data: tableDataList.slice(start, end),
                total: tableDataList.length
            }
        }
        return {
            data: [],
            total: 0
        }
    }

    render () {
        const { maxTableHeight, page, displayLength } = this.state
        const { children } = this.props
        const { data, total } = this.reformedTableInfo()
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

                <Pagination
                    {
                        ...tablePaginationProps
                    }
                    activePage={page}
                    displayLength={displayLength}
                    total={total}
                    onChangePage={this.handleChangePage}
                    onChangeLength={this.handleChangeLength}
                />
            </React.Fragment>
        )
    }
}

export default TableWithPagination
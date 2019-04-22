/**
 * Created by Ysssssss on 19/4/15.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

class CustomizeReport extends PureComponent {
    render () {
        const fakeData = [
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "00:00-00:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "01:00-01:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "02:00-02:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "03:00-03:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "04:00-04:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "05:00-05:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "06:00-06:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "07:00-07:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "08:00-08:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "09:00-09:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 1212.0,
                "inner_count": 8.0,
                "inner_price": 151.5,
                "price": 151.5,
                "time_key": "10:00-10:59",
                "total_amount": 1212.0,
                "total_count": 8.0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 2.0,
                "inner_price": 0.0,
                "price": 0.0,
                "time_key": "11:00-11:59",
                "total_amount": 0,
                "total_count": 2.0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "12:00-12:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 15.0,
                "inner_count": 4.0,
                "inner_price": 3.75,
                "price": 3.75,
                "time_key": "13:00-13:59",
                "total_amount": 15.0,
                "total_count": 4.0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 27.0,
                "inner_count": 3.0,
                "inner_price": 9.0,
                "price": 9.0,
                "time_key": "14:00-14:59",
                "total_amount": 27.0,
                "total_count": 3.0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "15:00-15:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "16:00-16:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 27.0,
                "inner_count": 1.0,
                "inner_price": 27.0,
                "price": 27.0,
                "time_key": "17:00-17:59",
                "total_amount": 27.0,
                "total_count": 1.0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 63.0,
                "inner_count": 3.0,
                "inner_price": 21.0,
                "price": 21.0,
                "time_key": "18:00-18:59",
                "total_amount": 63.0,
                "total_count": 3.0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "19:00-19:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "20:00-20:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "21:00-21:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "22:00-22:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            },
            {
                "inner_amount": 0,
                "inner_count": 0,
                "inner_price": 0,
                "price": 0,
                "time_key": "23:00-23:59",
                "total_amount": 0,
                "total_count": 0,
                "waimai_amount": 0,
                "waimai_count": 0,
                "waimai_price": 0
            }
        ]
        return (
            <div>
            <Table
                virtualized
                bordered
                cellBordered
                height={400}
                headerHeight={80}
                data={fakeData}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Column width={320} align="center" fixed>
                    <HeaderCell>时段</HeaderCell>
                    <Cell dataKey="time_key" />
                </Column>
                <Column width={150} colSpan={3}>
                    <HeaderCell className="header-cell-group">
                        <div className="header-cell-group-title">时段小计</div>
                        <div className="header-cell-group-subtitle">
                            <span style={{ width: 150 }}>订单数</span>
                            <span style={{ width: 150 }}>营业额(元)</span>
                            <span style={{ width: 150 }}>平均订单金额(元)</span>
                        </div>
                    </HeaderCell>
                    <Cell dataKey="total_count" />
                </Column>
                <Column width={150}>
                    <HeaderCell />
                    <Cell dataKey="total_amount" />
                </Column>
                <Column width={150}>
                    <HeaderCell />
                    <Cell dataKey="price" />
                </Column>
                <Column width={150} colSpan={3}>
                    <HeaderCell className="header-cell-group">
                        <div className="header-cell-group-title">堂食</div>
                        <div className="header-cell-group-subtitle">
                            <span style={{ width: 150 }}>订单数</span>
                            <span style={{ width: 150 }}>营业额(元)</span>
                            <span style={{ width: 150 }}>平均订单金额(元)</span>
                        </div>
                    </HeaderCell>
                    <Cell dataKey="inner_count" />
                </Column>
                <Column width={150}>
                    <HeaderCell />
                    <Cell dataKey="inner_amount" />
                </Column>
                <Column width={150}>
                    <HeaderCell />
                    <Cell dataKey="inner_price" />
                </Column>
                <Column width={150} colSpan={3}>
                    <HeaderCell className="header-cell-group">
                        <div className="header-cell-group-title">外卖</div>
                        <div className="header-cell-group-subtitle">
                            <span style={{ width: 150 }}>订单数</span>
                            <span style={{ width: 150 }}>营业额(元)</span>
                            <span style={{ width: 150 }}>平均订单金额(元)</span>
                        </div>
                    </HeaderCell>
                    <Cell dataKey="waimai_count" />
                </Column>
                <Column width={150}>
                    <HeaderCell />
                    <Cell dataKey="waimai_amount" />
                </Column>
                <Column width={150}>
                    <HeaderCell />
                    <Cell dataKey="waimai_price" />
                </Column>
                <Column width={120} fixed="right">
                    <HeaderCell>Action</HeaderCell>

                    <Cell>
                        {rowData => {
                            function handleAction() {
                                alert(`time_key:${rowData.time_key}`);
                            }
                            return (
                                <span>
                                    <a onClick={handleAction}> 编辑 </a>
                                    <a onClick={handleAction}> 删除 </a>
                                </span>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>
            </div>
        )
    }
}

export default CustomizeReport
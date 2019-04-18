/**
 * Created by Ysssssss on 19/4/16.
 */

import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, Icon } from 'antd'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import CustomizeReportEditDropTarget from '../view/CustomizeReportEditDropTarget'
import CustomizeReportEditDropSource from '../view/CustomizeReportEditDropSource'

import { CUSTOMIZE_REPORT_NUMBER, CUSTOMIZE_REPORT_DIMENSION } from "../../constants/DndType";
import { arrayToObject } from "../../utils/arrayHelper";


function mapStateToProps (state) {
    const { customizeReport } = state
    const { dimensionItemList, numberItemList } = customizeReport
    return {
        dimensionItemList,
        dimensionItemMap: arrayToObject(dimensionItemList, 'id'),
        numberItemList,
        numberItemMap: arrayToObject(numberItemList, 'id'),
    }
}

@connect(
    mapStateToProps,
)

class CustomizeReportEditPage extends PureComponent {
    constructor (props) {
        super (props)
        this.state = {
            filterIdList: [],
            dimensionIdList: [],
            contrastIdList: [],
            numberIdList: [],
        }
    }

    handleDragDrop = ({ id, setting }) => {
        const key = `${setting}IdList`
        if (this.state[key].includes(id)) return;
        this.setState({
            [key]: [
                ...this.state[key],
                id
            ]
        })
    }

    // 判断是否选入筛选项配置
    handleIsSelectedByFilter = (id) => {
        const { filterIdList } = this.state
        return filterIdList.includes(id)
    }

    // 判断是否选入表格项配置
    handleIsSelectedByTable = (id) => {
        const { dimensionIdList, contrastIdList, numberIdList } = this.state
        return dimensionIdList.concat(contrastIdList, numberIdList).includes(id)
    }

    render () {
        const { dimensionItemList, numberItemList, dimensionItemMap, numberItemMap } = this.props
        const { filterIdList, dimensionIdList, contrastIdList, numberIdList } = this.state
        return (
            <DragDropContextProvider className="customize-report-edit-page"
                                     backend = { HTML5Backend }
            >
                <div className="customize-report-edit-page-header">
                    <div className="customize-report-title">测试报表名称</div>
                    <div className="customize-report-edit-operation">
                        <Button>取消</Button>
                        <Button type="primary">保存</Button>
                        <Button type="primary">保存并退出</Button>
                    </div>
                </div>
                <div className="customize-report-edit-page-body">
                    <div className="customize-report-edit-option-block">
                        <div className="customize-report-edit-option-block-dimension">
                            <div className="option-block-title">维度</div>
                            { dimensionItemList.map(item => (
                                <CustomizeReportEditDropSource
                                    key={item.id}
                                    id={item.id}
                                    type={ CUSTOMIZE_REPORT_DIMENSION }
                                    name={item.name}
                                    selectedByFilter={this.handleIsSelectedByFilter(item.id)}
                                    selectedByTable={this.handleIsSelectedByTable(item.id)}
                                />
                            )) }
                        </div>
                        <div className="customize-report-edit-option-block-data">
                            <div className="option-block-title">数值</div>
                            { numberItemList.map(item => (
                                <CustomizeReportEditDropSource
                                    key={item.id}
                                    id={item.id}
                                    type={ CUSTOMIZE_REPORT_NUMBER }
                                    name={item.name}
                                    selectedByTable={this.handleIsSelectedByTable(item.id)}
                                />
                            )) }
                        </div>
                    </div>
                    <div className="customize-report-edit-filter-block">
                        <div className="customize-report-edit-filter-block-filter">
                            <div className="filter-block-title">
                                <Icon type="filter" />
                                <span>筛选项配置</span>
                            </div>
                            { (filterIdList || []).map(id => {
                                const item = dimensionItemMap[id] || {}
                                return (
                                    <div className="filter-selected-item dimension">
                                        <span className="filter-selected-item-icon">abc</span>
                                        <span>{ item.name }</span>
                                    </div>
                                )
                            }) }
                            <CustomizeReportEditDropTarget
                                type={ CUSTOMIZE_REPORT_DIMENSION }
                                handleDragDrop={id => this.handleDragDrop({id, setting: 'filter'})}
                            />
                        </div>
                        <div className="customize-report-edit-filter-block-table">
                            <div className="filter-block-title">
                                <Icon type="table" />
                                <span>表格项配置</span>
                            </div>
                            <div className="filter-block-sub-title">维度</div>
                            { (dimensionIdList || []).map(id => {
                                const item = dimensionItemMap[id] || {}
                                return (
                                    <div className="filter-selected-item dimension">
                                        <span className="filter-selected-item-icon">abc</span>
                                        <span>{ item.name }</span>
                                    </div>
                                )
                            }) }
                            <CustomizeReportEditDropTarget
                                type={ CUSTOMIZE_REPORT_DIMENSION }
                                handleDragDrop={id => this.handleDragDrop({id, setting: 'dimension'})}
                            />
                            <div className="filter-block-sub-title">对比</div>
                            { (contrastIdList || []).map(id => {
                                const item = dimensionItemMap[id] || {}
                                return (
                                    <div className="filter-selected-item dimension">
                                        <span className="filter-selected-item-icon">abc</span>
                                        <span>{ item.name }</span>
                                    </div>
                                )
                            }) }
                            <CustomizeReportEditDropTarget
                                type={ CUSTOMIZE_REPORT_DIMENSION }
                                handleDragDrop={id => this.handleDragDrop({id, setting: 'contrast'})}
                            />
                            <div className="filter-block-sub-title">数值</div>
                            { (numberIdList || []).map(id => {
                                const item = numberItemMap[id] || {}
                                return (
                                    <div className="filter-selected-item number">
                                        <span className="filter-selected-item-icon">123</span>
                                        <span>{ item.name }</span>
                                    </div>
                                )
                            }) }
                            <CustomizeReportEditDropTarget
                                type={ CUSTOMIZE_REPORT_NUMBER }
                                handleDragDrop={id => this.handleDragDrop({id, setting: 'number'})}
                            />
                        </div>
                        <div className="customize-report-edit-filter-block-sort">
                            <div className="filter-block-title">
                                <Icon type="sort-ascending" />
                                <span>表格排序</span>
                            </div>
                            <div className="option-block-item">
                                选择排序维度
                            </div>
                        </div>
                    </div>
                </div>
            </DragDropContextProvider>
        )
    }
}

export default CustomizeReportEditPage
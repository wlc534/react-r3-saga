import React, {
    Component
} from 'react'
import {
    Card,
    Input
} from 'antd'
import {
    connect
} from 'react-redux';
import {
    addInput,
    showText
} from "../actions/addInputAction";


class AddInput extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleAddLeft = this.handleAddLeft.bind(this)
    }
    handleClick(value) {
        this.props.onAddInput(value)
    }
    handleAddLeft(value) {
        this.props.onShowText(value)
    }

    render() {
        const {
            showtext
        } = this.props;
        return (
             <Card title = "容器组件2 "style = {{ width: 500 }} >
                <div className = 'numShow' > { showtext} </div> 
                <p className = 'flexP' >
                    <Input.Search placeholder = "input search text"
                        enterButton = "添加"
                        onSearch = {value => this.handleClick(value)}/>
                    < Input.Search placeholder = "input search text"
                        enterButton = "到左边"
                        onSearch = {value => this.handleAddLeft(value)}/> 
                </p >
            </Card>

        )
    }

}

function mapStateToProps(state) {
    return {
        showtext: state.addInput.showtext
    }

}

function mapDispatchToProps(dispatch) {
    return {
        onAddInput: (text) => dispatch(addInput(text)),
        onShowText: (str) => dispatch(showText(str))
    }

}

const AddInputCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddInput)

export default AddInputCon
avm.define('counter', class extends Component {

    render(props) {
        return (
            <view>
                <text>{props.num}</text>
                <button onClick={this.btn1Click}>按钮1</button>
                <button onClick={this.btn2Click}>按钮2</button>
            </view>
        );
    }

    btn1Click() {
        this.fire('MyEvent1',{
            msg:'来自按钮1的fire'
        })
    }
    btn2Click() {
        this.props.onMyEvent2&&this.props.onMyEvent2({msg:'来自按钮2'})
    }
})

import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'
import style from './GlobalMenu.less'
import {connect} from 'react-redux'

class GlobalMenu extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
  }

  render() {
    const {dispatch, user} = this.props;
    return(
      <header className='GlobalMenu'>
        <div className="GlobalMenu-left">
          <ul>
            <li className='GlobalMenu-logo'>
              <img src={require('./logo.png')} alt="logo" title="logo"/>
            </li>
            <li><Link to="/" activeClassName='GlobalMenu-active'>首页</Link></li>
            <li><Link to="/issue" activeClassName='GlobalMenu-active'>react常见问题</Link></li>
            <li><Link to="/customerInsight" activeClassName='GlobalMenu-active'>客户洞察</Link></li>
            <li><Link to="/activeMarketing" activeClassName='GlobalMenu-active'>主动营销</Link></li>
            <li><Link to="/joinMarketing" activeClassName='GlobalMenu-active'>联合营销</Link></li>
            <li><Link to="/contentManagement" activeClassName='GlobalMenu-active'>内容管理</Link></li>
            <li><Link to="/loyaltyManagement" activeClassName='GlobalMenu-active'>忠诚度管理</Link></li>
            <li><Link to="/precisionAdvertising" activeClassName='GlobalMenu-active'>精准广告</Link></li>
            <li><Link to="/orderCenter" activeClassName='GlobalMenu-active'>订单中心</Link></li>
            <li><Link to="/serviceCenter" activeClassName='GlobalMenu-active'>客服中心</Link></li>
            <li><Link to="/callSystem" activeClassName='GlobalMenu-active'>呼叫系统</Link></li>
            <li><Link to="/dataManagement" activeClassName='GlobalMenu-active'>数据管理</Link></li>
          </ul>
        </div>
        <div className="GlobalMenu-right">
          <ul>
            <li className="GlobalMenu-userName">{user.userName}</li>
            <li><Link to="/changePassword">修改密码</Link></li>
            <li><Link to="/signOut">退出</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}

GlobalMenu = connect((state) => {
  return {
    router: state.router,
    user: state.user,
  }
})(GlobalMenu)

export default GlobalMenu

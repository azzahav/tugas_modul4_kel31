import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

import State from './useState-Disini/usestate';
import Effect from './useEffect-Disini/useffect';
import Context from './useContext-Disini/usecontext';
import Reducer from './useReducer-Disini/usereducer';
import Ref from './useRef-Disini/useref';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Router>
    <Layout style={{background:'#FFDAB9'}}>
      <Header style={{background:'#CD853F'}}>
        <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px'}}>
        ERIGO STORE
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Roboto', fontSize: '20px'}}>useState</Link>
          <Link to="/effect" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Roboto', fontSize: '20px'}}>useEffect</Link>
          <Link to="/context" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Roboto', fontSize: '20px'}}>useContext</Link>
          <Link to="/reducer" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Roboto', fontSize: '20px'}}>useReducer</Link>
          <Link to="/ref" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Roboto', fontSize: '20px'}}>useRef</Link>
        </div>
      </Header>
      <Switch>
        <Route path="/" exact component={State} />
        <Route path="/effect" exact component={Effect} />
        <Route path="/context" exact component={Context} />
        <Route path="/reducer" exact component={Reducer} />
        <Route path="/ref" exact component={Ref} />
      </Switch>
      <Content style={{textAlign:'center', display: 'inline-block'}}></Content>
      <Footer style={{background:'#CD853F', fontSize: '20px', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
          KELOMPOK 31 - Azzah - Caerel
        </Footer>
    </Layout>
    </Router>
 )
}

export default App;
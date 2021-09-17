import React, { useReducer } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const initialState = {count: 0};
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
      case 'reset':
        return initialState;
    default:
      throw new Error();
  }
}

export default function ReducerUse() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
      <Card hoverable style={{display: 'inline-block', width:315, margin:'15px', boxShadow:'0px 1px 1px'}} 
      cover={<img alt="gambar1" height="345px" src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/1_pos1x8.jpg" />}>
        <Meta title="Erigo T-Shirt Have Sun Navy" description="Rp 62.000" />
        <div style={{margin:'15px',marginLeft:'auto',marginRight:'auto'}}>
          <Button type="primary" shape="round" onClick={() => dispatch({type:'increment'})}>
           Tambah 
          </Button>
          <Button type="primary" shape="round" onClick={() => dispatch({type:'decrement'})}>
           Hapus
          </Button>
        </div>
        <div>
          <Button type="danger" shape="round" style={{margin:'7px 25px 0px 25px'}} onClick={() => dispatch({type:'reset'})}>
            RESET
          </Button>
        </div >
        <div style={{margin:'15px'}}>
        <Text>Total cart : {state.count}</Text>
        </div>
        <div style={{margin:'10px', fontSize: '15px', fontFamily:'Roboto'}}>
          <Text>Ini useReducer</Text>
        </div>
      </Card>
    </div>
  );
}
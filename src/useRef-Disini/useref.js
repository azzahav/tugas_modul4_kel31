import React, { useRef } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

export default function RefUse() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      inputEl.current.focus();
      alert(`YEAYY Terinput!`);
    };
    return (
        <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
            <Card hoverable style={{display: 'inline-block', width:400, margin:'15px', boxShadow:'0px 1px 1px'}}>
                <Meta title="Daftar Kunjungan"/>
                <div style={{margin:'15px 15px 8px 15px'}}>
                    <Text>Masukkan Nama Kamu</Text> <br />
                    <input ref={inputEl} type="text" />
                </div>
                <div style={{margin:'10px'}}>
                    <Button type="primary" onClick={onButtonClick}>Input Nama</Button>
                </div>
                <div style={{margin:'10px', fontSize: '15px', fontFamily:'Roboto'}}>
                    <Text>Ini useRef</Text>
                </div>
            </Card>
        </div>
    );
}
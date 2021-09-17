import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;


export default function EffectUse() {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount (count - 1);
    };

    useEffect(() => {
        if (count >0) {
            alert(`YEAAYY Berhasil Ditambahkan`);
        }
    }, [count]);

    return (
        <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
            <Card hoverable style={{display: 'inline-block', width:315, margin:'15px', boxShadow:'0px 1px 1px'}} 
            cover={<img alt="gambar1" height="345px" src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779610/bahan/erigo_cwgcvx.jpg" />}>
            <Meta title="Erigo T-Shirt Have Sun Navy" description="Rp 62.000" />
            <div>
            <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={countUp}>
                Tambah
            </Button>
            </div>
            <div>
            <Button type="danger" shape="round" style={{margin:'7px 25px 0px 25px'}} onClick={countDown}>
                Hapus
            </Button>
            </div>
            <div style={{margin:'10px', fontSize: '20px'}}>
            <Text>Total cart : {count}</Text>
            </div>
            <div style={{margin:'10px', fontSize: '15px', fontFamily:'Roboto'}}>
                <Text>useEffect Disini!</Text>
            </div>
            </Card>
        </div>
    );
}
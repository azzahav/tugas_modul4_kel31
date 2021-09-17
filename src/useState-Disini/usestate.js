import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Image, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

export default function StateUse() {
    const [showImage, setShowImage] = useState(true);
    
    const hideImage = () => {
        setShowImage(!showImage);
    };

    return (
        <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
            <Card hoverable style={{display: 'inline-block', width:380, margin:'15px', boxShadow:'0px 1px 1px'}}>
                <div style={{margin:'0px 0px 8px 0px'}}>
                    <Button type="danger" shape="round" onClick={hideImage}>
                        {showImage !== true ? "Liat Gambar" : "Sembunyiin"}
                        </Button>
                </div>
                <Image style={{ height:'380px', display: showImage === true ? "flex" : "none" }} src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/2_nxmz3q.jpg"/>
                <Meta title="Erigo T-Shirt Have Sun Navy" description="Rp 62.000" />
                <div style={{margin:'10px', fontSize: '15px', fontFamily:'Roboto'}}>
                <Text>useEffect Disini!</Text>
            </div>
            </Card>
            <Card hoverable style={{display: 'inline-block', width:380, margin:'15px', boxShadow:'0px 1px 1px'}}>
                <div style={{margin:'0px 0px 8px 0px'}}>
                    <Button type="danger" shape="round" onClick={hideImage}>
                        {showImage !== true ? "Liat Gambar" : "Sembunyiin"}
                        </Button>
                </div>
                <Image style={{ height:'380px', display: showImage === true ? "flex" : "none" }} src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/2_nxmz3q.jpg"/>
                <Meta title="Erigo T-Shirt Have Sun Navy" description="Rp 62.000" />
                <div style={{margin:'10px', fontSize: '15px', fontFamily:'Roboto'}}>
                <Text>useEffect Disini!</Text>
            </div>
            </Card>
           
        </div>
    );
}
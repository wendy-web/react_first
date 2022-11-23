import React from 'react';
import {Row, Col} from 'antd'

export default function App() {
  return (
    <div>
        <p>栅格系统的展示：</p>
        <Row>
            <Col span={8}>col-8</Col>
            <Col span={8} offset={8}>
                col-8
            </Col>
        </Row>
    </div>
  )
}

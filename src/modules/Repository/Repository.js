import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";
import { Button, Card, Col, Row, List, Statistic, Typography } from "antd";

const { Title } = Typography;

const Repository = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <PageLayout>
      <Row>
        <Col span={24}></Col>
      </Row>
    </PageLayout>
  );
};

export default Repository;

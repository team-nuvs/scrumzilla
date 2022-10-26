import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import Tooltip from "@atlaskit/tooltip";
import "./homePage.css";
function ProgressDisplay(props) {
  const emphasis = props.emphasized;
  return (
    <Card
      style={{
        border: "none",
        textAlign: "center",
        backgroundColor: emphasis ? "#F5F5F6" : "#00000000",
      }}
    >
      <CardBody
        style={{
          padding: emphasis ? "5px 10px" : "0",
        }}
      >
        {emphasis ? <p className="tab-title">Progress Tracker</p> : null}
        <Row style={{ justifyContent: "center" }}>
          <Col xs={4} className="middle-padding rounded-2">
            <Card
              style={{
                fontWeight: "600",
                color: "#5E6C84",
                border: "none",
                backgroundColor: emphasis ? "#FFFFFF" : "#00000000",
              }}
            >
              <Tooltip
                position="bottom-start"
                content={`To do: ${props?.todo}`}
              >
                <CardBody className="tab py-1">
                  <p className="tab-header">To do</p>
                  {`${props.issueTodo}%`}
                </CardBody>
              </Tooltip>
            </Card>
          </Col>
          <Col xs={4} className="middle-padding rounded-2">
            <Card
              style={{
                fontWeight: "600",
                color: "#0052cc",
                border: "none",
                backgroundColor: emphasis ? "#FFFFFF" : "#00000000",
              }}
            >
              <Tooltip
                position="bottom-start"
                content={`Progress: ${props?.progress}`}
              >
                <CardBody className="tab py-1">
                  <p className="tab-header">Progress</p>
                  {`${props.issueProgress}%`}
                </CardBody>
              </Tooltip>
            </Card>
          </Col>
          <Col xs={4} className="middle-padding rounded-2">
            <Card
              style={{
                fontWeight: "600",
                color: "#00875A",
                border: "none",
                backgroundColor: emphasis ? "#FFFFFF" : "#00000000",
              }}
            >
              <Tooltip position="bottom-start" content={`Done: ${props?.done}`}>
                <CardBody className="tab py-1">
                  <p className="tab-header">Done</p>
                  {`${props.issueDone}%`}
                </CardBody>
              </Tooltip>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ProgressDisplay;

import React from "react";
import IssueTable from "./issueTable";
import { Card } from "reactstrap";
const IssuesComponent = (props) => {
  return (
    <Card
      style={{
        backgroundColor: "#F5F5F6",
        border: "5px solid #F5F5F6",
        borderRadius: "10px",marginBottom:"10px"
      }}
      className = "issuesComponent"
    >
      <div className="heading">Issues</div>
      <Card
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          border:"none",
          padding: "13px",
        }}
      >
        <IssueTable issueList={props.issueList}/>
      </Card>
    </Card>
  );
}

export default IssuesComponent;

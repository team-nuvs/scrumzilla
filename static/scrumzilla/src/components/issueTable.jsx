import React from "react";
import { Table } from "reactstrap";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
import "./issueTable.css";

const IssueTable = (props) => {
  const { issueList, openModal } = props ?? {};
  return (
      <Table borderless responsive className="text-start">
        <thead>
          <tr>
            <th>Type</th>
            <th>Summary</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Story Point</th>
            <th>Label</th>
            <th>Reporter</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {issueList?.length>0 ? issueList?.map((issue, index) => {
            return (
              <tr key={index} style={{fontSize:"14px"}}>
                <td>
                  <img
                    src={issue?.issuetype?.iconUrl}
                    alt={`${issue?.issuetype?.name}`}
                  />
                </td>
                <td>{issue?.summary}</td>
                <td className="text-center">
                  <img
                    src={issue?.priority?.iconUrl}
                    alt={`${issue?.priority?.name}`}
                  />
                </td>
                <td className="text-center">
                  <Badge appearance="primary">{issue?.storypoint}</Badge>
                </td>
                <td>
                  {issue?.labels?.map((label, index) => (
                    <Lozenge key={index}>{label}</Lozenge>
                  ))}
                </td>
                <td className="d-flex align-items-center">
                  <Avatar
                    appearance="circle"
                    src={issue?.reporter?.avatarUrls["16x16"]}
                    name={issue?.reporter?.displayName}
                    size={"small"}
                    
                  />
                  <span className="ms-1">{issue?.reporter?.displayName}</span>
                </td>
                <td>
                  <Button
                    style={{
                      fontSize: "inherit",
                    }}
                    appearance="link"
                    // onClick={(e) => {
                    //   openModal(issue?.id);
                    // }}
                    component={Link}
                    to = {`issue/${issue?.id}`}
                  >
                    View
                  </Button>
                </td>
              </tr>
            );
          }): <tr><td colSpan={7} className="fs-5 text-center" style={{fontWeight:"500", color:"#253858"}}>Hurray no unassigned issues left !</td></tr>}
        </tbody>
      </Table>
  );
};

export default IssueTable;

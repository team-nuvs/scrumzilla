import React from "react";
import { Table } from "reactstrap";
import Button from "@atlaskit/button";
import Badge from "@atlaskit/badge";
import Avatar from "@atlaskit/avatar";
import Lozenge from "@atlaskit/lozenge";
import "./issueTable.css";
import { percentageOfTasks } from "./helpers/percentageOfTasks";
import Tooltip from "@atlaskit/tooltip";

const IssueModalTable = (props) => {
  const { recommendations, compareWith, addFlag, setFlagContent } = props ?? {};
  const totalLabelScore = recommendations?.reduce(
    (userA, userB) => userA.labelScore + userB.labelScore
  );
  const setAssignee = (name) => {
    const err = false;
    setFlagContent({
      title:"Assignee was set successfully!",
      description: `${name} was set as an assignee.`,
      condition: true
    })
    if (err) {
      setFlagContent({
        title: "Assignee could not be set!",
        description: `The functionality failed because of: Network Error`,
        condition: false,
      });
    }
    addFlag();
  };
  return (
    <Table borderless responsive className="text-start">
      <thead>
        <tr>
          <th>Contributor</th>
          <th>Issues Assigned</th>
          <th className="text-center">Story Point</th>
          <th>Label Score</th>
          <th>Remark</th>
          <th>Assign</th>
        </tr>
      </thead>
      <tbody>
        {recommendations?.map((user, index) => {
          const labelScore =
            totalLabelScore === 0
              ? 0
              : percentageOfTasks(totalLabelScore, user?.labelScore);
          const userAssignmentStatus =
            user?.storypoint?.remarkCompareWith[`${compareWith}`];
          const assignmentSeverity = userAssignmentStatus?.remark
            ?.toUpperCase()
            ?.includes("OVER")
            ? true
            : false;
          return (
            <tr key={index} style={{fontSize:"14px"}}>
              <td>
                <div className="d-flex align-items-center">
                  <Avatar
                    appearance="circle"
                    src={user?.avatarUrl}
                    name={user?.displayName}
                    size={"small"}
                  />
                  <div
                    className="ms-1"
                    style={{
                      overflow: "hidden",
                      whiteSpace: "pre",
                      textOverflow: "ellipsis",
                      maxWidth: "150px",
                    }}
                  >
                    {user?.displayName}
                  </div>
                </div>
              </td>
              <td>
                <Badge appearance="default">{user?.progress?.total}</Badge>
              </td>
              <td className="text-center">
                <Badge appearance="primary">
                  {user?.storypoint?.sprintTotal}
                </Badge>
              </td>
              <td className="text-left">{`${labelScore}`}</td>
              <td>
                <Tooltip
                  position="bottom-start"
                  content={userAssignmentStatus?.message}
                >
                  <Lozenge
                    appearance={assignmentSeverity ? "removed" : "success"}
                  >
                    {userAssignmentStatus?.remark}
                  </Lozenge>
                </Tooltip>
              </td>
              <td>
                <Button
                  style={{
                    // backgroundColor: "#0052cc",
                    // padding: "3px 10px",
                    fontSize: "14px",
                  }}
                  appearance="primary"
                  onClick={(e) => {
                    setAssignee(user?.displayName);
                  }}
                >
                  Set as Assignee
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default IssueModalTable;

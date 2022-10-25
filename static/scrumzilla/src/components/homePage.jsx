import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { userAllocationHomePage, errorHomePageData } from "./mocks/mockData";
import IssuesComponent from "./issuesComponent";
import InsightsComponent from "./insightsComponent";
import MoreIcon from "@atlaskit/icon/glyph/more";
import Button from "@atlaskit/button";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import Spinner from "@atlaskit/spinner";
import ProgressDisplay from "./progressDisplay";
import { percentageOfTasks } from "./helpers/percentageOfTasks";
import SectionMessage from "@atlaskit/section-message";
import "./homePage.css";
import { Link } from "react-router-dom";
import { invoke } from "@forge/bridge";

const HomePage = (props) => {
  const [userEmpData, setEmpData] = useState();
  const [appError, setAppError] = useState();
  useEffect(() => {
    invoke('getProgressMetrics', { example: 'my-invoke-variable' }).then((data) => {
      if(data?.error){
        setAppError(data)
      }else{
        setEmpData(data)
      }
    })
  }, []);
  const { total, todo, progress, assigned } =
    userEmpData?.sprintProgress ?? {};
  let issuesAssigned = 0;
  let issuesNotAssigned = 0;
  let issueTodo = 0;
  let issueProgress = 0;
  let issueDone = 0;
  const issueList = !!userEmpData?.unAssignedIssues
    ? userEmpData?.unAssignedIssues
    : [];
  const userInsights = !!userEmpData?.usersInsights
    ? userEmpData?.usersInsights
    : [];
  if (!!userEmpData?.sprintProgress) {
    issuesAssigned = percentageOfTasks(total, assigned);
    issuesNotAssigned = 100 - issuesAssigned;
    issueTodo = percentageOfTasks(total, todo);
    issueProgress = percentageOfTasks(total, progress);
    issueDone = 100 - (issueTodo + issueProgress);
  }

  return (
    <div style={{ width: "95%" }}>
      {appError?.error ? (
        <SectionMessage title="App Launch Failed !" appearance="error">
          {appError?.key && (
            <div
              className="my-1"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >{`Error due to issue: ${appError?.key} – ${appError?.summary}`}</div>
          )}
          <div>{appError?.error}</div>
          <div className="mt-2" style={{ fontSize: "12px", color: "#5E6C84" }}>
            {appError?.key
              ? "Go to Board > Configure Board > Issue Types > (drag and drop) Story Point estimation and Labels on desired issue type > Save."
              : "Go to Backlog > click on Create sprint > add or create issues > click on Start sprint."}
          </div>
        </SectionMessage>
      ) : userEmpData ? (
        <Row>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={5} sm={3}>
                <Card style={{ backgroundColor: "#F5F5F6", border: "none" }}>
                  <CardBody style={{ padding: "5px 10px" }}>
                    <p className="tab-title">Ticket Tracker</p>
                    <Row style={{ justifyContent: "center" }}>
                      <Col xs={6} className="middle-padding rounded-2">
                        <Card
                          style={{
                            fontWeight: "600",
                            color: "#0052cc",
                          }}
                          className="border-0"
                        >
                          <CardBody className="tab text-center py-1">
                            <p className="tab-header text-center">Assigned</p>
                            {`${issuesAssigned}%`}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs={6} className="middle-padding rounded-2">
                        <Card
                          style={{
                            fontWeight: "600",
                            color: "#E5483B",
                          }}
                          className="border-0"
                        >
                          <CardBody className="tab text-center py-1">
                            <p className="tab-header text-center">Unassigned</p>
                            {`${issuesNotAssigned}%`}
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={7} sm={5}>
                <ProgressDisplay
                  emphasized
                  issueDone={issueDone}
                  issueTodo={issueTodo}
                  issueProgress={issueProgress}
                />
              </Col>
              <Col xs={12} sm={4}>
                <DropdownMenu
                  trigger={({ triggerRef, ...props }) => (
                    <Button
                      {...props}
                      className="float-end mx-2"
                      iconBefore={<MoreIcon label="more" />}
                      ref={triggerRef}
                    />
                  )}
                >
                  <DropdownItemGroup>
                    {/* <DropdownItem description="Previous versions are saved">
                    Edit
                  </DropdownItem> */}
                    <DropdownItem>
                      <Button
                        className="float-end"
                        appearance="subtle-link"
                        component={Link}
                        to={`/settings/0`}
                      >
                        Settings
                      </Button>
                    </DropdownItem>
                    {/* <DropdownItem>Clone</DropdownItem> */}
                  </DropdownItemGroup>
                </DropdownMenu>
                <Button
                  className="float-end"
                  component={Link}
                  to={`/daily-standup`}
                >
                  Daily Standup
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col xs={12}>
                <IssuesComponent issueList={issueList} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12}>
                <InsightsComponent userInsights={userInsights} />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <div
          style={{ width: "95%", height: "80vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <Spinner size={"large"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

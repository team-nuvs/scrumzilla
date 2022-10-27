import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import InsightsComponent from "./insightsComponent";
import Select from "@atlaskit/select";
import { dailyStandup } from "./mocks/mockData";
import RichText from "./notes";
import { DateModifier } from "./helpers/dateModifier";
import MyTimer from "./coutdownTimer";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
import Avatar from "@atlaskit/avatar";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import { AutoDismissFlag, FlagGroup } from "@atlaskit/flag";
import WarningIcon from "@atlaskit/icon/glyph/warning";
import { Y200 } from "@atlaskit/theme/colors";
import timeoutPNG from "../assets/timeout.png";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import MoreIcon from "@atlaskit/icon/glyph/more";
import TaskIcon from "@atlaskit/icon/glyph/task";
import Spinner from "@atlaskit/spinner";
import { invoke, router, view } from "@forge/bridge";
import SectionMessage from "@atlaskit/section-message";
import "./dailyStandupPage.css";
import szLogo from '../assets/sz-logo.png';

function DailyStandup(props) {
  const [numberOfMinutes, setNumberOfMinutes] = useState(1);
  const [showFlag, setShowFlag] = useState(false);
  const [flagContent, setFlagContent] = useState({
    title: "Time is running out!",
    description: "One minute remains in current standup",
  });
  const [standupData, setStandupData] = useState();
  const [appError, setAppError] = useState();
  const [standupNotes, setStandupNotes] = useState();
  const [index, setIndex] = useState(0);
  const [userIndex, setUserIndex] = useState(0);
  const [userInsight, setUserInsight] = useState();
  const [update, setUpdate] = useState();
  const [onTimerComplete, setTimerComplete] = useState(false);
  useEffect(() => {
    invoke("getStandupDetails").then((data) => {
      if (data?.standupDetails) {
        console.log(data);
        setStandupData(data);
        setNumberOfMinutes(Number.parseFloat(data?.timelimit));
      } else {
        setAppError({
          error: "No app updates to show !",
        });
      }
    });
    // setTimeout(() => {
    //   setStandupData(dailyStandup.root);
    // }, 1); //API
  }, []);

  const { issues, insights, standupDetails } = standupData ?? {};
  const currStandup = standupDetails ? standupDetails[index] : undefined;
  const insightsSorted = currStandup?.user?.map((user) =>
    insights.find((insight) => insight.accountId === user.accountId)
  );

  const onComplete = async () => {
    const history = await view.createHistory();
    invoke("setStandupDetailsNotes", {
      standupId: currStandup?.standupId,
      notes: standupNotes,
    }).then((data) => {
      if (data) {
        console.log(data);
        history.push("/");
      }
    }); // flag not there
  };

  const optionCreated =
    standupDetails?.map((standup, index) => ({
      label: `${DateModifier(standup.created)}`,
      value: index,
    })) ?? [];

  const timeReturn = (numberOfMinutes) => {
    const d = new Date();
    return d.setSeconds(d.getSeconds() + 60 * numberOfMinutes);
  };

  const onClickChangeUser = (value) => {
    setUserIndex(value);
  };

  useEffect(() => {
    setUserInsight(insightsSorted ? insightsSorted[userIndex] : undefined);
    setUpdate(currStandup ? currStandup.user[userIndex] : undefined);
  }, [index, userIndex, currStandup, insightsSorted]);

  const addFlag = () => {
    setShowFlag(true);
  };

  const handleDismiss = () => {
    setShowFlag(false);
  };

  const issueRender = (issues, issuesUpdate) => {
    const issueDisplay = issues.find(
      (issue) => issue.id === issuesUpdate.issueId
    );
    return (
      <div className="py-2">
        {issueDisplay ? (
          <div className="d-flex align-items-center ps-3">
            <img
              style={{ height: "16px", width: "16px" }}
              className="ms-2"
              src={issueDisplay?.fields.issuetype.iconUrl}
              alt={`${issueDisplay?.fields.issuetype.name}`}
            />
            <div
              className="ms-1"
              style={{ fontSize: "14px", color: "#0052cc", fontWeight: "500" }}
            >{`${issueDisplay?.key} – ${issueDisplay?.fields.summary}`}</div>
          </div>
        ) : (
          <div className="d-flex align-items-center ps-3">
            <TaskIcon size="small" className="ms-2" />
            <div
              className="ms-1"
              style={{ fontSize: "14px", color: "#0052cc", fontWeight: "500" }}
            >{`${issuesUpdate?.key}`}</div>
          </div>
        )}
        <div style={{ paddingLeft: "44px" }}>{issuesUpdate?.message}</div>
      </div>
    );
  };

  console.log("userInsight", userInsight, "update", update);
  return appError?.error ? (
    <SectionMessage title="App Launch Failed !" appearance="error">
      {appError?.key && (
        <div
          className="my-1"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >{`Error due to issue: ${appError?.key} – ${appError?.summary}`}</div>
      )}
      <div>{appError?.error}</div>
    </SectionMessage>
  ) : standupData ? (
    <div style={{ width: "95%" }}>
      <FlagGroup onDismissed={handleDismiss}>
        {showFlag && (
          <AutoDismissFlag
            id={`warning_flag`}
            appearance="normal"
            icon={<WarningIcon primaryColor={Y200} />}
            title={flagContent.title}
            description={flagContent.description}
          />
        )}
      </FlagGroup>
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-start align-items-center"
        >
          <Button
            style={{ fontSize: "14px", paddingLeft: "0px" }}
            iconBefore={<ArrowLeftIcon label="" size="medium" />}
            appearance="subtle"
            component={Link}
            to={"/"}
          >
            Back
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col
          xs={4}
          className="d-flex justify-content-start align-items-center"
        ></Col>
        <Col xs={4} className="d-flex justify-content-end align-items-center">
          <div style={{ width: "100%", marginTop: "10px" }}>
            <div className="d-flex">
              <MyTimer
                expiryTimestamp={timeReturn(numberOfMinutes)}
                autoStart={false}
                totalTime={numberOfMinutes * 60}
                addFlag={addFlag}
                expired={() => setTimerComplete(true)}
              />
              <Button
                className="ms-3"
                style={{ fontSize: "14px" }}
                appearance="primary"
                onClick={onComplete}
              >
                Complete
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={4} className="d-flex justify-content-end align-items-center">
          {"Show Updates from:"}
          <div
            style={{
              width: "50%",
              maxWidth: "150px",
              marginLeft: "5px",
            }}
          >
            <Select
              inputId="compare-with-selector"
              onChange={(value) => setIndex(value.value)}
              value={optionCreated?.find((option) => option.value === index)}
              className="standup-select-parent"
              classNamePrefix="standup-select"
              options={optionCreated}
            />
          </div>
          <div
            style={{
              marginLeft: "5px",
            }}
          >
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
                    to={`/settings/1`}
                  >
                    Settings
                  </Button>
                </DropdownItem>
                {/* <DropdownItem>Clone</DropdownItem> */}
              </DropdownItemGroup>
            </DropdownMenu>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12}>
              <Card
                style={{
                  backgroundColor: "#F5F5F6",
                  border: "5px solid #F5F5F6",
                  borderRadius: "10px",
                  padding: "0",
                }}
              >
                <div className="heading">{"Updates"}</div>
                <Card
                  style={{
                    backgroundColor: onTimerComplete ? "#6554C0" : "#ffffff",
                    borderRadius: "10px",
                    padding: !onTimerComplete ? "10px" : "0px",
                    border: !onTimerComplete ? "none" : "1px solid #F4F5F7",
                  }}
                >
                  <div className={onTimerComplete ? "d-none" : "d-block"}>
                    <Row>
                      <Col xs={12} className={"d-flex justify-content-end"}>
                        <Button
                          iconBefore={<ArrowLeftIcon label="" size="medium" />}
                          appearance="subtle"
                          isDisabled={userIndex === 0}
                          onClick={() => {
                            console.log(userIndex);

                            setUserIndex((userIndex) => userIndex - 1);
                          }}
                        >
                          Previous
                        </Button>
                        <Button
                          iconAfter={<ArrowRightIcon label="" size="medium" />}
                          appearance="subtle"
                          isDisabled={
                            userIndex === currStandup?.user?.length - 1
                          }
                          onClick={() => {
                            console.log(
                              "userIndex",
                              userIndex,
                              "standup-length",
                              currStandup?.user?.length
                            );
                            setUserIndex((userIndex) => userIndex + 1);
                          }}
                          className="ms-2"
                        >
                          Next
                        </Button>
                      </Col>
                    </Row>
                    <div style={{ padding: "20px 20px" }}>
                      <CardTitle className="d-flex align-items-center fs-6">
                        <Avatar
                          appearance="circle"
                          src={userInsight?.avatarUrl}
                          name={userInsight?.displayName}
                          size={"small"}
                        />
                        <div className="ms-1 md-d-block">
                          {userInsight?.displayName}
                        </div>
                      </CardTitle>
                      <div style={{ padding: "18px 25px" }}>
                        {update ? (
                          <div>
                            {!(
                              update?.standupUpdate[0].length === 0 &&
                              update?.standupUpdate[1].length === 0 &&
                              update?.standupUpdate[2].length === 0
                            ) ? (
                              <div style={{ color: "#505f79" }}>
                                {update.standupUpdate[2].length !== 0 && (
                                  <div>
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      {"• What issues are blocking me ?"}
                                    </div>
                                    {console.log(update.standupUpdate[0])}

                                    <div>
                                      {update.standupUpdate[2]?.map(
                                        (issuesUpdate, index) => (
                                          <div key={`blocked_${index}`}>
                                            {issueRender(issues, issuesUpdate)}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                                {update.standupUpdate[1].length !== 0 && (
                                  <div className="mt-3">
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      {"• What am I working on today?"}
                                    </div>

                                    <div>
                                      {update.standupUpdate[1]?.map(
                                        (issuesUpdate, index) => (
                                          <div key={`today_${index}`}>
                                            {issueRender(issues, issuesUpdate)}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                                {update.standupUpdate[0].length !== 0 && (
                                  <div className="mt-3">
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      {"• What did I work on yesterday?"}
                                    </div>

                                    <div>
                                      {update.standupUpdate[0]?.map(
                                        (issuesUpdate, index) => (
                                          <div key={`yesterday_${index}`}>
                                            {issueRender(issues, issuesUpdate)}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              "No Updates"
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <Card
                    style={{
                      backgroundColor: "#00000000",
                      border: "none",
                      color: "#ffffff",
                      padding: "20px",
                    }}
                    className={
                      onTimerComplete ? "d-block image my-4" : "d-none"
                    }
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        style={{ height: "160px", width: "160px" }}
                        src={timeoutPNG}
                        alt="Time Out!"
                      ></img>
                    </div>
                    <CardTitle
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "inherit",
                        textAlign: "center",
                      }}
                    >
                      {"Oops! Looks like you've exceeded the time limit."}
                    </CardTitle>
                    <CardBody
                      style={{
                        color: "inherit",
                        paddingLeft: "0",
                        paddingTop: "5px",
                        fontSize: "14px",
                        textAlign: "center",
                        width: "80%",
                        margin: "0 auto",
                        opacity: "80%",
                      }}
                    >
                      <strong>It should be short and impactful</strong> - aim
                      for fifteen minutes or less. If you are in-person, people
                      should literally stand up if they can. You may need to
                      pull people back on track if they start side discussions.
                    </CardBody>{" "}
                    <div className="d-flex justify-content-center mt-4">
                      <Button
                        className="textWhite"
                        appearance="link"
                        onClick={() => {
                          setNumberOfMinutes(5);
                          setTimerComplete(false);
                        }}
                      >
                        Extend time by 5 minutes
                      </Button>
                      <Button className="buttonText mx-2" onClick={onComplete}>
                        End the Daily Stand-Up
                      </Button>
                    </div>
                  </Card>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Col xs={12}>
              <InsightsComponent
                onClickChangeUser={onClickChangeUser}
                userInsights={insightsSorted}
                minimal={true}
                heading={"People"}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <Card
                style={{
                  backgroundColor: "#F5F5F6",
                  border: "5px solid #F5F5F6",
                  borderRadius: "10px",
                  padding: "0",
                }}
              >
                <div className="heading">{"Notes"}</div>
                <Card
                  style={{
                    backgroundColor: "#ffffff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "2px",
                  }}
                >
                  <RichText
                    defaultText={currStandup?.notes}
                    onChange={(value) => {
                      setStandupNotes(value);
                    }}
                  />
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  ) : (
    <div
      style={{ width: "95%", height: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <img src={szLogo} alt="logo" className="sz-logo"/>
      <div>
        <Spinner size={"large"} />
      </div>
    </div>
  );
}

export default DailyStandup;

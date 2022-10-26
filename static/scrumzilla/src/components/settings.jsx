import React, { Fragment, useEffect, useState } from "react";
import Button from "@atlaskit/button";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import { Link } from "react-router-dom";
import LoadingButton from "@atlaskit/button/loading-button";
import TextField from "@atlaskit/textfield";
import { useParams } from "react-router-dom";
import { invoke, view } from "@forge/bridge";

import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
} from "@atlaskit/form";

const Settings = () => {
  const { settingType } = useParams();
  const [settingData, setSettingData] = useState();
  useEffect(() => {
    invoke("getProjectSettingData", { example: "my-invoke-variable" }).then(
      (data) => {
        if (data) {
          setSettingData(data);
          console.log(data);
        }
      }
    );
  }, []);
  return (
    <div
      style={{
        width: "400px",
        maxWidth: "95%",
      }}
    >
      <Button
        style={{ fontSize: "14px", paddingLeft: "0px" }}
        iconBefore={<ArrowLeftIcon label="" size="medium" />}
        appearance="subtle"
        component={Link}
        to={Number.parseInt(settingType) === 0 ? "/" : "/daily-standup"}
      >
        Back
      </Button>
      <Form
        onSubmit={async (data) => {
          console.log("form data", data);
          const history = await view.createHistory();
          if (data?.sprint_limit) {
            invoke("setDefaultStorypoint", {
              value: data?.sprint_limit,
            }).then((data) => {
              console.log("Saved!!!", data);
              history.push("/");
            });
          } else if (data?.standup_time_limit) {
            invoke("setStandupDetailsTimelimit", {
              timeInMinutes: data?.standup_time_limit,
            }).then((data) => {
              console.log("Saved!!!", data);
              history.push("/daily-standup");
            });
          }
        }}
      >
        {({ formProps, submitting }) => (
          <form {...formProps} className="my-3">
            <FormHeader title="Settings" />
            <FormSection>
              {Number.parseInt(settingType) === 0 && (
                <Field
                  aria-required={true}
                  name="sprint_limit"
                  label="Sprint Limit"
                  isRequired
                  defaultValue={settingData?.defaultStoryPoint}
                  validate={(value) =>
                    value && isNaN(value) ? "Insert numbers only" : undefined
                  }
                >
                  {({ fieldProps, error }) => (
                    <Fragment>
                      <TextField autoComplete="off" {...fieldProps} />
                      {!error && (
                        <HelperMessage>
                          Insert the maximum sprint points you want to set for a
                          user.
                        </HelperMessage>
                      )}
                      {error && (
                        <ErrorMessage>Insert only numbers</ErrorMessage>
                      )}
                    </Fragment>
                  )}
                </Field>
              )}
              {Number.parseInt(settingType) === 1 && (
                <Field
                  aria-required={true}
                  name="standup_time_limit"
                  label="Standup Time Limit"
                  isRequired
                  defaultValue={settingData?.timelimit}
                  validate={(value) =>
                    value && isNaN(value) ? "Insert only numbers" : undefined
                  }
                >
                  {({ fieldProps, error }) => (
                    <Fragment>
                      <TextField autoComplete="off" {...fieldProps} />
                      {!error && (
                        <HelperMessage>
                          Insert the time limit for standup meetings in minutes.
                        </HelperMessage>
                      )}
                      {error && (
                        <ErrorMessage>Insert only numbers</ErrorMessage>
                      )}
                    </Fragment>
                  )}
                </Field>
              )}
            </FormSection>
            {/* <Button appearance="subtle">Cancel</Button> */}
            <LoadingButton
              type="submit"
              appearance="primary"
              isLoading={submitting}
              className="mt-2"
            >
              Save
            </LoadingButton>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Settings;

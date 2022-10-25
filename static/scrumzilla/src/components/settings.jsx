import React, { Fragment, useEffect } from "react";
import Button from "@atlaskit/button";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import { Link } from "react-router-dom";
import LoadingButton from "@atlaskit/button/loading-button";
import TextField from "@atlaskit/textfield";
import { useParams } from "react-router-dom";

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
        to={Number.parseInt(settingType)===0?"/":"/daily-standup"}
      >
        Back
      </Button>
      <Form
        onSubmit={(data) => {
          console.log("form data", data);
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
                  defaultValue="8"
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
                  defaultValue="15"
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

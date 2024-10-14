import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div>
      <div className="max-w-xl space-y-3">
        <TextField.Root placeholder="Add new issue" />
        <TextArea placeholder="description" />
        <Button>Submit new Issue</Button>
      </div>
    </div>
  );
};

export default NewIssue;

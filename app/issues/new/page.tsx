"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div>
      <div className="max-w-xl space-y-4">
        <TextField.Root placeholder="Add new issue" />
        <Button>Submit new Issue</Button>
        <SimpleMDE />
      </div>
    </div>
  );
};

export default NewIssue;

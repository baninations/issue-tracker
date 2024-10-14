import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      <h1>Button here</h1>
      <Button>
        <Link href="/issues/new">Add new issue page</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;

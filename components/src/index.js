import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        hello
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        name="Pj"
        timeAgo="Today at 9:39PM"
        content="Good one"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        name="ajay"
        timeAgo="Today at 7:39PM"
        content="Great blog"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        name="Adam"
        timeAgo="Yesterday at 1:39PM"
        content="Nice blog post!"
        avatar  ={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

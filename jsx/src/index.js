 //Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

 //Create a React Components
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard> 
     <CommentDetail 
     author="Sam" 
     timeAgo="Today at 6:00PM" 
     text="Can be better!" 
     img={faker.image.avatar()}/>
     </ApprovalCard> 

     <ApprovalCard>
     <CommentDetail 
     author="Alex" 
     timeAgo="Today at 2:00AM" 
     text="Not bad!" 
     img={faker.image.avatar()}/>
     </ApprovalCard>

     <ApprovalCard>
     <CommentDetail 
     author="Jane" 
     timeAgo="Today at 10:00PM" 
     text="Nice post blog!" 
     img={faker.image.avatar()}/>
     </ApprovalCard>
    </div>  
  );
};

//take a react class and show it on the screen.
ReactDOM.render(<App />, document.querySelector('#root'));
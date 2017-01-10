var React = require('react');

var User = React.createClass({
  render:function(){
    return(
      <div className="userBox">
        <div className="userTitle">
          <img/>
          <p></p>
        </div>
        <UserList></UserList>
      </div>
    )
  }
});
// var UserList = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <ul>
//           <li>
//             <span></span>
//             <div>
//               <p></p>
//               <i></i>
//             </div>
//           </li>
//         </ul>
//       </div>
//     )
//   }
// })

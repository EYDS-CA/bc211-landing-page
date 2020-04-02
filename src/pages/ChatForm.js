import React from 'react';

const ChatForm = () => {
  // const locationPath = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
  // const locationPath = 'https://bookmarkl.ink'
  return (
    <form id="inputform" name='inputform' method="POST" action='https://cc.elements.telus.com/Elementschat/ChatClient.html'>
      Call Center Name<input type="text" id="Call_Center_Name" name="Call_Center_Name"/><br/>
      Call Center Address<input type="text" id="Call_Center_Address" name="Call_Center_Address" defaultValue="cc.elements.telus.com"/><br/>
      Call Center Queue Name<input type="text" id="Call_Center_QueueName" name="Call_Center_QueueName"/><br/>
      Call Center Port<input type="text" id="Call_Center_Port" name="Call_Center_Port" defaultValue="2324"/><br/>
      Tenant ID<input type="text" id="TenantID" name="TenantID" defaultValue="108"/><br/>
      Application ID<input type="text" id="AppID" name="AppID"/><br/>
      Calling User Phone Type<input type="text" id="Calling_User_PhoneType" name="Calling_User_PhoneType" defaultValue="CHAT"/><br/>
      Calling User Skills<input type="text" id="Calling_User_Skills" name="Calling_User_Skills"/><br/>
      Calling User First Name<input type="text" id="Calling_User_FirstName" name="Calling_User_FirstName"/><br/>
      Calling User Last Name<input type="text" id="Calling_User_LastName" name="Calling_User_LastName"/><br/>
      Calling User Priority<input type="text" id="Calling_User_Priority" name="Calling_User_Priority"/><br/>
      Calling User URL<input type="text" id="Calling_User_URL" name="Calling_User_URL"/><br/>
      Calling User Message<input type="text" id="Calling_User_HardMessage" name="Calling_User_HardMessage"/><br/>
      Three-Panel Layout<input type="text" id="Three_PanelLayout" name="Three_PanelLayout"/><br/>
      Display URL in Panel Four<input type="text" id="Display_URL_In_Panel_4" name="Display_URL_In_Panel_4"/><br/>
      Open URL in Browser<input type="text" id="Open_URL_In_Browser" name="Open_URL_In_Browser"/><br/>
      URL Display Speed<input type="text" id="URlDisplayspeed" name="URlDisplayspeed"/><br/>
      Agent Sent Link Clickable<input type="text" id="Agent_sent_link_clickable" name="Agent_sent_link_clickable"/><br/>
      Agent Sent Link Open Default<input type="text" id="Agent_sent_link_open_default" name="Agent_sent_link_open_default"/><br/>
      Show Status Codes<input type="text" id="show_status_codes" name="show_status_codes"/><br/>
      Typing Indicator<input type="text" id="Typing_Indicator" name="Typing_Indicator"/><br/>
      Hide Send Button<input type="text" id="Hide_Send_Button" name="Hide_Send_Button" defaultValue="true"/><br/>
      Estimated Wait Time Flag<input type="text" id="Estimated_Wait_Time_Flag" name="Estimated_Wait_Time_Flag"/><br/>
      Estimated Wait Time Seconds<input type="text" id="Estimated_Wait_Time_Add_seconds" name="Estimated_Wait_Time_Add_seconds"/><br/>
      Layout JS URL<input type="text" id="layout_js" name="layout_js" defaultValue="https://cc.elements.telus.com/Elementschat/JS/4windowlayout.js"/><br/>
      Laout CSS URL<input type="text" id="layout_css" name="layout_css" defaultValue="https://cc.elements.telus.com/Elementschat/CSS/fourwindowlayout.css"/><br/>
      Globals JS URL<input type="text" id="global_js" name="global_js" defaultValue="https://cc.elements.telus.com/Elementschat/JS/PS.ChatSDK.Globals.js" /><br/>
      <button id="SubmitData" name="SubmitData" type="submit">Start Chat</button>
    </form>
  );
};

export default ChatForm;

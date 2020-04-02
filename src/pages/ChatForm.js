import React from 'react';

const ChatForm = () => {
  // const locationPath = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
  // const locationPath = 'https://bookmarkl.ink'
  return (
    <form id="inputform" name='inputform' method="POST" action='https://cc.elements.telus.com/Elementschat/ChatClient.html'>
      <input type="hidden" id="Call_Center_Name" name="Call_Center_Name"/><br/>
      <input type="hidden" id="Call_Center_Address" name="Call_Center_Address" defaultValue="cc.elements.telus.com"/><br/>
      Call Center Queue Name<input type="text" id="Call_Center_QueueName" name="Call_Center_QueueName"/><br/>
      <input type="hidden" id="Call_Center_Port" name="Call_Center_Port" defaultValue="2324"/><br/>
      <input type="hidden" id="TenantID" name="TenantID" defaultValue="108"/><br/>
      <input type="hidden" id="AppID" name="AppID"/><br/>
      <input type="hidden" id="Calling_User_PhoneType" name="Calling_User_PhoneType" defaultValue="CHAT"/><br/>
      <input type="hidden" id="Calling_User_Skills" name="Calling_User_Skills"/><br/>
      Calling User First Name<input type="text" id="Calling_User_FirstName" name="Calling_User_FirstName"/><br/>
      Calling User Last Name<input type="text" id="Calling_User_LastName" name="Calling_User_LastName"/><br/>
      <input type="hidden" id="Calling_User_Priority" name="Calling_User_Priority"/><br/>
      Calling User URL<input type="text" id="Calling_User_URL" name="Calling_User_URL"/><br/>
      Calling User Message<input type="text" id="Calling_User_HardMessage" name="Calling_User_HardMessage"/><br/>
      <input type="hidden" id="Three_PanelLayout" name="Three_PanelLayout"/><br/>
      <input type="hidden" id="Display_URL_In_Panel_4" name="Display_URL_In_Panel_4"/><br/>
      <input type="hidden" id="Open_URL_In_Browser" name="Open_URL_In_Browser"/><br/>
      <input type="hidden" id="URlDisplayspeed" name="URlDisplayspeed"/><br/>
      <input type="hidden" id="Agent_sent_link_clickable" name="Agent_sent_link_clickable"/><br/>
      <input type="hidden" id="Agent_sent_link_open_default" name="Agent_sent_link_open_default"/><br/>
      <input type="hidden" id="show_status_codes" name="show_status_codes"/><br/>
      <input type="hidden" id="Typing_Indicator" name="Typing_Indicator"/><br/>
      <input type="hidden" id="Hide_Send_Button" name="Hide_Send_Button" defaultValue="false"/><br/>
      <input type="hidden" id="Estimated_Wait_Time_Flag" name="Estimated_Wait_Time_Flag"/><br/>
      <input type="hidden" id="Estimated_Wait_Time_Add_seconds" name="Estimated_Wait_Time_Add_seconds"/><br/>
      <input type="hidden" id="layout_js" name="layout_js" defaultValue="https://cc.elements.telus.com/Elementschat/JS/4windowlayout.js"/><br/>
      <input type="hidden" id="layout_css" name="layout_css" defaultValue="https://cc.elements.telus.com/Elementschat/CSS/fourwindowlayout.css"/><br/>
      <input type="hidden" id="global_js" name="global_js" defaultValue="https://cc.elements.telus.com/Elementschat/JS/PS.ChatSDK.Globals.js" /><br/>
      <button id="SubmitData" name="SubmitData" type="submit">Start Chat</button>
    </form>
  );
};

export default ChatForm;

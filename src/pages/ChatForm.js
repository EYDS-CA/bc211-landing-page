import React from 'react';

const ChatForm = () => {
  const locationPath = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
  return (
    <form id="inputform" name='inputform' method="POST" action='https://cc.elements.telus.com/Elementschat/ChatClient.html'>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" id="Call_Center_Name" name="Call_Center_Name"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Call_Center_Address" name="Call_Center_Address" defaultValue="cc.elements.telus.com"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Call center Queue name: </label>
            </td>
            <td>
              <input type="text" id="Call_Center_QueueName" name="Call_Center_QueueName"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Call center name: </label>
            </td>
            <td>
              <label>Call center address: </label>
            </td>
            <td>
              <label>Call center Port:</label>
            </td>
            <td>
              <input type="text" id="Call_Center_Port" name="Call_Center_Port" defaultValue="2324"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="TenantID" name="TenantID" defaultValue="108"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>TenantName:</label>
            </td>
            <td>
              <label>Application ID:</label>
            </td>
            <td>
              <input type="text" id="AppID" name="AppID"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Calling user phone type: </label>
            </td>
            <td>
              <input type="text" id="Calling_User_PhoneType" name="Calling_User_PhoneType" defaultValue="CHAT"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Calling_User_Skills" name="Calling_User_Skills"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Calling_User_FirstName" name="Calling_User_FirstName"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Calling_User_LastName" name="Calling_User_LastName"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Calling_User_Priority" name="Calling_User_Priority"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Calling_User_URL" name="Calling_User_URL"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Calling_User_HardMessage" name="Calling_User_HardMessage"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Calling_User_Skills: </label>
            </td>
            <td>
              <label>FirstName: </label>
            </td>
            <td>
              <label>LastName: </label>
            </td>
            <td>
              <label>Priority: </label>
            </td>
            <td>
              <label>URL: </label>
            </td>
            <td>
              <label>HardMessage: </label>
            </td>
            <td>
              <label>3 Panel Layout: </label>
            </td>
            <td>
              <input type="text" id="Three_PanelLayout" name="Three_PanelLayout"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Display_URL_In_Panel_4" name="Display_URL_In_Panel_4"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Open URL in browser: </label>
            </td>
            <td>
              <input type="text" id="Open_URL_In_Browser" name="Open_URL_In_Browser"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="URlDisplayspeed" name="URlDisplayspeed"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Agent_sent_link_clickable" name="Agent_sent_link_clickable"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Agent_sent_link_open_default" name="Agent_sent_link_open_default"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="show_status_codes" name="show_status_codes"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Typing_Indicator" name="Typing_Indicator"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Hide_Send_Button" name="Hide_Send_Button" defaultValue="true"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" id="Estimated_Wait_Time_Flag" name="Estimated_Wait_Time_Flag"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Display URL in Panel 4: </label>
            </td>
            <td>
              <label>URl Displayspeed: </label>
            </td>
            <td>
              <label>Agent sent link clickable: </label>
            </td>
            <td>
              <label>Agent sent link open default: </label>
            </td>
            <td>
              <label>show_status_codes: </label>
            </td>
            <td>
              <label>Typing Indicator: </label>
            </td>
            <td>
              <label>Hide send button: </label>
            </td>
            <td>
              <label>Show Estimated Wait Time: </label>
            </td>
            <td>
              <label>Estimated Wait Time Add seconds: </label>
            </td>
            <td>
              <input type="text" id="Estimated_Wait_Time_Add_seconds" name="Estimated_Wait_Time_Add_seconds"/>
            </td>
          </tr>
          <tr>
            <td>
              <input readOnly type="text" id="layout_js" name="layout_js" value={`${locationPath}/chat-layout.js`}/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Layout css file: </label>
            </td>
            <td>
              <input readOnly type="text" id="layout_css" name="layout_css" value={`${locationPath}/chat-styles.css`}/>
            </td>
          </tr>
          <tr>
            <td>
              <input readOnly type="text" id="global_js" name="global_js" value={`${locationPath}/chat-globals.js`}/>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Layout js file: </label>
            </td>
            <td>
              <label>Lang/Chat js global file: </label>
            </td>
            <td>
              <label> </label>
            </td>
            <td>
              <div>
                <button id="SubmitData" name="SubmitData" type="submit">Start Chat</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default ChatForm;

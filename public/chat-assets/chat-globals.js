var chatSDKGlobals = { // eslint-disable-line no-unused-vars, no-var
  OptionalParameter: {
    "key": "",
    "value": ""
  },
  StatusRes: {
    "104": "Calling Call Center",
    "105": "Waiting for Agent",
    "106": "In Call",
    "107": "Not Connected",
    "133": "Connected to the call center",
    "157": "Call placed on hold",
    "165": "Waiting in queue"
  },
  WaitingInQueue: {
    1: "Less than",
    2: "About",
    3: "Longer then"
  },
  NoAgentForThisCall: {
    6: "Unknown reason",
    7: "Insufficient memory",
    8: "No agents available",
    9: "Invalid queue",
    10: "No primary connection server address",
    11: "No call ID",
    12: "Invalid external queue",
    13: "Unknown skill name is specified in call requirements",
    14: "Stream with reference your already exist",
    15: "Cannot find the call by your reference",
    16: "Call with your reference cannot be accepted by the agent",
    17: "There is no connection available now",
    18: "Agent refused"
  },
  JoinChatData: {
    "API_Version": "1.0",
    "Call_Center_Name": "",
    "Call_Center_Address": "",
    "Call_Center_QueueName": "",
    "Calling_User_HardMessage": "",
    "Calling_User_Skills": "",
    "Call_Center_Port": "",
    "Calling_User_Priority": "-1",
    "Calling_User_URL": "facebook.com",
    "Calling_User_FirstName": "",
    "Calling_User_LastName": "",
    "Calling_User_PhoneType": "",
    "TQOS": "0",
    "Routing_Priority": "0",
    "AccountID": "0",
    "ApplicationID": "",
    "TenantID": "",
    "OptionalParameterCount": ""
  },
  SendMessageData: {
    "Connection_ID": 123,
    "Message_Text": "Madhu test page"
  },
  LeaveChatData: {
    "Connection_ID": 123
  },
  TypingMessageData: {
    "Connection_ID": 123,
    "typing_status": 1
  },
  FireEventData: {
    "Connection_ID": 123,
    "Fire_Event_Name": "url",
    "OptionalParameterCount": ""
  },
  DataGlobal: {
    his: "",
    connId: -1,
    lastEventId: 0,
    CCUServerAddress: "https://ccsp7.elementsdev.telus.com"
  },
  ClientParameters: {
    URlDisplayspeed: 30000, // Once in every 30 secs Agent_sent_link_clickable: true, Agent_sent_link_open_default: true, Customer_sent_link_clickable: true, Customer_sent_link_open_default: true, Estimated_Wait_Time_Flag: true, Estimated_Wait_Time_Add_seconds: 20, // -20 for subtracting time
    Typing_Indicator: true,
    Show_Status_Codes: true,
    Three_PanelLayout: false, // 3-Panel Layout Display_URL_In_Panel_4: true, // For 4-Panel Layout Open_URL_In_Browser: false, // ONly for Agent/Customer sent URLs / false Open in Panel 4 Hide_Send_Button: true
  },
  IsVideoEnabled: false
};

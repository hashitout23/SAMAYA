import React, { Component } from 'react';
import './chatbot.css';
import { GoCommentDiscussion } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { withAuth0} from "@auth0/auth0-react";


class chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      chatHistory: [],
      chatInputHeight: 'auto',
      showChatbot: false,
     };
    // this.API_KEY = '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';
    this.API_URL = 'http://localhost:8000/api';
    this.chatInputRef = React.createRef();
  }

  handleUserMessageChange = (message) => {
    // Call the callback function provided by the parent
    this.props.onUserMessage(message);
  };
  
  handleChat = () => {
    const userMessage = this.state.userMessage.trim();
    if (!userMessage) return;
    this.props.onUserMessage(userMessage); 
    this.setState({
      userMessage: '',
      chatHistory: [...this.state.chatHistory, { message: userMessage, type: 'outgoing' }],
    }, () => {
      setTimeout(() => {
        this.setState({
          chatHistory: [...this.state.chatHistory, { message: 'Thinking...', type: 'incoming' }],
        }, this.generateResponse);
      }, 600);
    });
  }

  generateResponse = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${this.API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: this.state.userMessage }],
      }),
    };

    fetch(this.API_URL, requestOptions)
    .then(res => res.json())
    .then(data => {
      const chatHistory = this.state.chatHistory;
      chatHistory[chatHistory.length - 1].message = data.choices[0].message.content.trim();
      this.setState({ chatHistory });
    })
    .catch(() => {
      const chatHistory = this.state.chatHistory;
      const trackingId = this.props.tmp && this.props.tmp.length > 0 ? this.props.tmp[this.props.tmp.length - 1]._id : 'N/A';
      const errorMessage = `Thank you for using SAMAYA. Your complaint has been registered. Tracking ID: ${trackingId}`;
      chatHistory[chatHistory.length - 1].message = errorMessage;
      this.setState({ chatHistory });
    });
}

  handleInputChange = (e) => {
    this.setState({ userMessage: e.target.value });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleChat();
    }
  }

  toggleChatbot = () => {
    const { isAuthenticated, loginWithRedirect } = this.props.auth0;
    if(!isAuthenticated){
      loginWithRedirect();
    }
    else{
    this.setState(prevState => ({ showChatbot: !prevState.showChatbot }))};
  }

  componentDidUpdate() {
    if (this.state.showChatbot) {
      document.body.classList.add('show-chatbot');
    } else {
      document.body.classList.remove('show-chatbot');
    }
   
  }

  render() {
    return (
      <div>
        <button className="chatbot-toggler" onClick={this.toggleChatbot}>
          <span className="material-symbols-rounded"><GoCommentDiscussion/></span>
          <span className="material-symbols-outlined"><IoClose/></span>
        </button>
        {this.state.showChatbot && (
          <div className="chatbot">
            <header>
              <h2 className='header1'>SAMAYA</h2>
              <span className="close-btn material-symbols-outlined" onClick={this.toggleChatbot}><IoClose/></span>
            </header>
            <ul className="chatbox">
              {this.state.chatHistory.map((chat, index) => (
                <li key={index} className={`chat ${chat.type}`}>
                  {chat.type === 'incoming' && <span className="material-symbols-outlined"><img src="src\assets\Frame 8.png" alt="" /></span>}
                  <p>{chat.message}</p>
                </li>
              ))}
            </ul>
            <div className="chat-input">
              <textarea
              style={{outline: 'none', boxShadow: '0 0 0 2px #fff'}} 
                ref={this.chatInputRef}
                placeholder="Enter your Grievances..."
                spellCheck="true"
                required
                value={this.state.userMessage}
                onChange ={(e) => {
                  this.handleInputChange(e);
                  this.handleUserMessageChange(e.target.value); // Call the callback
                }}
                onKeyDown={this.handleKeyDown}
              />
              <span id="send-btn" className="material-symbols-rounded" onClick={this.handleChat}><IoSend/></span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(chatbot);


// {"message": userMessage}
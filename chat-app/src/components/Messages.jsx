import React, { useState } from 'react';
import { MessageForm } from './MessageForm';
import { MessageItem } from './MessageItem';
import '../stylesheets/chat.css';

export function Messages({ messages, onSubmit }) {

  return (
    <div>
      <div>
        <MessageItem messages={messages} onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

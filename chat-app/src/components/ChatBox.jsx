import React, { useState } from "react";
import { Messages } from './Messages';

export function ChatBox() {
	return (
		<div className="chatContainer">
			<Messages />
		</div>
	)
}
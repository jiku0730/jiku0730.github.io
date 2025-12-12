"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
	text: string;
	speed?: number;
	delay?: number;
	className?: string;
};

export default function TypewriterText({ text, speed = 80, delay = 0, className }: TypewriterTextProps) {
	const [displayed, setDisplayed] = useState("");

	useEffect(() => {
		setDisplayed("");
		let frame = 0;
		let isMounted = true;
		let intervalId: ReturnType<typeof setInterval> | undefined;
		let timeoutId: ReturnType<typeof setTimeout> | undefined;

		const startTyping = () => {
			intervalId = setInterval(() => {
				if (!isMounted) {
					return;
				}

				frame += 1;
				setDisplayed(text.slice(0, frame));

				if (frame >= text.length) {
					if (intervalId) {
						clearInterval(intervalId);
					}
				}
			}, Math.max(speed, 16));
		};

		timeoutId = setTimeout(startTyping, Math.max(delay, 0));

		return () => {
			isMounted = false;
			if (intervalId) {
				clearInterval(intervalId);
			}
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [text, speed, delay]);

	const showCaret = displayed.length > 0;

	return (
		<span className={`relative inline-block leading-tight ${className ?? ""}`} aria-live="polite">
			<span>{displayed}</span>
			{showCaret && (
				<span
					aria-hidden
					className="absolute -bottom-1 right-0 block h-[2px] w-[0.75em] bg-white animate-caret-blink"
				/>
			)}
		</span>
	);
}

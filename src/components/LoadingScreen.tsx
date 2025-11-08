import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState('');

  const fullText = 'prrint("HELLO, WELCOME ")';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length-1) {
        setDisplayText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval); // stop cleanly when finished
      }
    }, 100); // typing speed (ms per char)

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadComplete, 500);
    }, 2000 + fullText.length * 100); // wait until typing is done before fading out

    return () => {
      clearInterval(typingInterval);
      clearTimeout(hideTimer);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center gradient-hero transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center space-y-6 animate-fade-in-up">
        <div className="font-mono text-xl md:text-2xl text-foreground/80 animate-glow">
          <span>{displayText}</span>
          {/* show cursor only while typing */}
          {displayText.length < fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </div>
        <div className="flex gap-2 justify-center mt-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

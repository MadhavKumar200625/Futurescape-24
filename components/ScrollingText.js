'use client'

const ScrollingText = ({notifiaction}) => {
  return (
    <div className="overflow-hidden pt-4 bg-blue-50">
      <div className="whitespace-nowrap animate-scroll">
        {notifiaction}
      </div>
    </div>
  );
};

export default ScrollingText;
import React from 'react';

// Alternating centered timeline component
export default function Education() {
  const educationEvents = [
    { title: 'Bachelor of Technology in CSE(A.I)' },
    { title: 'Class XII (Science)' },
    { title: 'Class X (Mathematics & Science)' },
  ];

  return (
    <div className="font-sans flex items-center justify-center">
      <div className="relative mx-auto max-w-xl py-8">
        {/* central vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-700" />

        {educationEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="mb-8 relative w-full">
              <div className="flex items-center w-full">
                {/* left column */}
                <div className={`w-1/2 ${isLeft ? 'pr-8 flex justify-end' : 'pr-8'}`}>
                  {isLeft && (
                    <div className="max-w-xs text-right">
                      <div className="inline-block rounded-l text-white px-4 py-3 shadow-md">
                        {event.title}
                      </div>
                    </div>
                  )}
                </div>

                {/* spacer for center line */}
                <div className="w-0 flex justify-center">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-gray-400 border-2 border-gray-700" />
                  </div>
                </div>

                {/* right column */}
                <div className={`w-1/2 ${!isLeft ? 'pl-8 flex justify-start' : 'pl-8'}`}>
                  {!isLeft && (
                    <div className="max-w-xs text-left">
                      <div className="inline-block rounded-lg text-white px-4 py-3 shadow-md">
                        {event.title}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

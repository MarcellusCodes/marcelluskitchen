import React from "react";

interface SectionIconContainerProps {
  children: React.ReactNode;
}

const SectionIconContainer: React.FC<SectionIconContainerProps> = ({
  children,
}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          className="w-20 h-20 -mb-6"
        >
          <path
            d="M753.812 241.256c-45.142-16.443-197.31-80.27-270.852-98.655-73.543-18.386-97.31-24.963-170.404-11.66-73.094 13.304-223.468 76.234-268.161 91.48"
            fill="none"
            strokeWidth={25}
            stroke="#a9adc1"
            strokeLinecap="round"
            className="stroke-current text-gray-600 dark:text-tertiary"
          />
        </svg>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="w-20 h-20 -rotate-[90deg] -mr-6"
          >
            <path
              d="M753.812 241.256c-45.142-16.443-197.31-80.27-270.852-98.655-73.543-18.386-97.31-24.963-170.404-11.66-73.094 13.304-223.468 76.234-268.161 91.48"
              fill="none"
              strokeWidth={25}
              stroke="#a9adc1"
              strokeLinecap="round"
              className="stroke-current text-gray-600 dark:text-tertiary"
            />
          </svg>
          <div className="h-24 w-24 duration-300 rounded-full border-2 border-gray-200 dark:border-gray-600 p-1 inline-flex items-center justify-center relative">
            {children}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="w-20 h-20 rotate-[90deg] -ml-6"
          >
            <path
              d="M753.812 241.256c-45.142-16.443-197.31-80.27-270.852-98.655-73.543-18.386-97.31-24.963-170.404-11.66-73.094 13.304-223.468 76.234-268.161 91.48"
              fill="none"
              strokeWidth={25}
              stroke="#a9adc1"
              strokeLinecap="round"
              className="stroke-current text-gray-600 dark:text-tertiary"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          className="w-20 h-20 rotate-[180deg] -mt-6"
        >
          <path
            d="M753.812 241.256c-45.142-16.443-197.31-80.27-270.852-98.655-73.543-18.386-97.31-24.963-170.404-11.66-73.094 13.304-223.468 76.234-268.161 91.48"
            fill="none"
            strokeWidth={25}
            stroke="#a9adc1"
            strokeLinecap="round"
            className="stroke-current text-gray-600 dark:text-tertiary"
          />
        </svg>
      </div>
    </>
  );
};

export default SectionIconContainer;

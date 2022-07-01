import React from "react";

interface BadgeProps {
  Title: string;
}

const Badge: React.FC<BadgeProps> = ({ Title }) => {
  return (
    <div className="rounded-full px-4 py-1 bg-gray-200 dark:bg-gray-600">
      <span className="font-primary text-lg text-gray-600 dark:text-gray-200">
        {Title}
      </span>
    </div>
  );
};

export default Badge;

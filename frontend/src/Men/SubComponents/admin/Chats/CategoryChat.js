import React from "react";

const CategoryChat = () => {
  return (
    <div>
      <iframe
        style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: 2,
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        className="mt-5 mr-5"
        width={440}
        height={380}
        src="https://charts.mongodb.com/charts-vazeezay_database-xamuu/embed/charts?id=6466879a-0418-4551-8dc1-7a393c589df1&maxDataAge=3600&theme=light&autoRefresh=true"
      />
    </div>
  );
};

export default CategoryChat;

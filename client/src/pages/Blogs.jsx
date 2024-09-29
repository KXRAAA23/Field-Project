import React from "react";
import styled from "styled-components";
import one from "../utils/Images/one.jpeg";
import two from "../utils/Images/two.jpeg";
import three from "../utils/Images/three.jpeg";


const blogsData = [
  {
    id: 1,
    title: "The Importance of Fitness Tracking",
    description:
      "Fitness tracking can help you monitor your progress, stay motivated, and reach your fitness goals more efficiently.",
    image: one,
  },
  {
    id: 2,
    title: "10 Tips to Stay Consistent with Workouts",
    description:
      "Consistency is key to seeing results. Here are 10 tips to help you maintain a regular workout routine.",
    image: two,
  },
  {
    id: 3,
    title: "Understanding Caloric Burn during Exercise",
    description:
      "Learn how different exercises affect the number of calories you burn and how to optimize your workout routine.",
    image: three,
  },
];

const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.bg_secondary};
`;

const BlogCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

const BlogImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const BlogDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const Blogs = () => {
  return (
    <BlogsContainer>
      {blogsData.map((blog) => (
        <BlogCard key={blog.id}>
          <BlogImage src={blog.image} alt={blog.title} />
          <BlogContent>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDescription>{blog.description}</BlogDescription>
          </BlogContent>
        </BlogCard>
      ))}
    </BlogsContainer>
  );
};

export default Blogs;

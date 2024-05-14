import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  content,
  imageUrl,
}) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      <Text color="gray.500" mb={2}>
        By {author} | {date}
      </Text>
      <Image src={imageUrl} alt={title} mb={4} />
      <Text>{content}</Text>
    </Box>
  );
};

export default BlogPost;

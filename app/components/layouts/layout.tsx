import { Box } from "@radix-ui/themes";
import { Header } from "../Navbar/Navbar";

export const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Box>
      <Box className="py-4 mt-0 lg:mt-4"><Header /></Box>
      <Box>{children}</Box>
    </Box>
  );
};

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Divider, Stack, styled, Typography } from "@mui/material";
import MuiCard from "@mui/material/Card";
import { signIn } from "next-auth/react";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  maxWidth: "450px",
  width: "100%",
  minHeight: "100%",
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    padding: "0 16px",
  },
}));

export const AuthWrapper = ({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) => {
  
  return (
    <SignUpContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "32px" }}
        >
          {title}
        </Typography>

        {children}

        <Divider>
          <Typography sx={{ color: "text.secondary" }}>or</Typography>
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => signIn("google")}
            startIcon={<GoogleIcon />}
          >
            {title} with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign up with Facebook")}
            startIcon={<FacebookIcon />}
          >
            {title} with Facebook
          </Button>
        </Box>
      </Card>
    </SignUpContainer>
  );
};

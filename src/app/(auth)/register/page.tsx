"use client";
import AppSnackbar from "@/components/AppSnackbar";
import { useAppDispatch } from "@/lib/hooks";
import { setSnackbarOpen } from "@/lib/reducers/snackBarReducer";
import { signUp } from "@/services/register";
import { AuthWrapper } from "@/wrappers/authWrapper";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name should not be empty"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email should not be empty"),
      password: Yup.string()
        .min(8, "Must be 8 characters")
        .required("Password should not be empty"),
    }),
    onSubmit: async (values) => {
      const res = await signUp(values);
      const { message, status } = res;
      if (status === 201) {
        dispatch(setSnackbarOpen({ message: message, variant: "success" }));
        router.push("/login");
      } else {
        dispatch(setSnackbarOpen({ message: message, variant: "error" }));
      }
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <>
      <AuthWrapper title="Sign up">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <TextField
              autoComplete="name"
              name="name"
              fullWidth
              id="name"
              placeholder="Abc"
              value={values.name}
              onChange={handleChange}
              helperText={errors.name}
              error={Boolean(errors.name)}
              color={errors.name ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              fullWidth
              id="email"
              placeholder="your@email.com"
              name="email"
              type="email"
              autoComplete="email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              helperText={errors.email}
              error={Boolean(errors.email)}
              color={errors.email ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              fullWidth
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="new-password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              color={errors.password ? "error" : "primary"}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive updates via email."
          />
          <Button type="submit" fullWidth variant="contained">
            Sign up
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <span>
              <Link href="/login">Sign in</Link>
            </span>
          </Typography>
        </Box>
      </AuthWrapper>
      <AppSnackbar />
    </>
  );
};

export default Register;

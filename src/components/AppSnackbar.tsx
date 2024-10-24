import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSnackBarClose } from "@/lib/reducers/snackBarReducer";
import { Alert, Snackbar } from "@mui/material";

const variantIcon = {
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
};

const AppSnackbar = () => {
  const { message, isOpen, variant } = useAppSelector(
    (state) => state.snackbar
  );
  const dispatch = useAppDispatch();

  const handleCLose = () => {
    dispatch(setSnackBarClose());
  };

  const Icon = variant !== null ? variantIcon[variant] : undefined;

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
      onClose={handleCLose}
    >
      <Alert
        onClose={handleCLose}
        severity={variant}
        variant="filled"
        sx={{ width: "100%" }}
        icon={Icon}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
